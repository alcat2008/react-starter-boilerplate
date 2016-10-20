
/* eslint-disable */

const path = require('path');
const fs = require('fs');
const del = require('del');
const ejs = require('ejs');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const webpackDevServer = require('webpack-dev-server');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


// TODO: Update configuration settings
const config = {
  title: 'React Starter Boilerplate',       // Your website title
  url: 'https://www.xxx.com',          // Your website URL
  project: 'react-starter-boilerplate',     // Firebase project. See README.md -> How to Deploy
  trackingID: 'UA-XXXXX-Y',                 // Google Analytics Site's ID
};

const tasks = new Map(); // The collection of automation tasks ('clean', 'copy', 'build', 'publish', etc.)

function run(task) {
  const start = new Date();
  console.log(`Starting '${task}'...`);
  return Promise.resolve()
    .then(() => tasks.get(task)())
    .then(() => {
      console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`);
    }, err => console.error(err.stack));
}

//
// Clean up the output directory
// -----------------------------------------------------------------------------
tasks.set('clean', () => del([path.join(__dirname, '../build/*'), path.join(__dirname, '!../build/dist/.git')], { dot: true }));

/**
 * Copy static files into the /build folder
 */
tasks.set('copy', () => {
  const ncp = require('ncp').ncp;
  ncp.limit = 16;
  return new Promise((resolve, reject) => {
    ncp(path.join(__dirname, '../src/public/'), path.join(__dirname, '../build/'), (err) => {
      if (err) {
        reject({ stack: err });
      }
      resolve();
    });
  });
});

//
// Copy ./index.html into the /build folder
// -----------------------------------------------------------------------------
tasks.set('html', () => {
  const webpackConfig = require('../config/webpack.config');
  const assets = JSON.parse(fs.readFileSync(path.join(__dirname, '../build/dist/assets.json'), 'utf8'));
  const template = fs.readFileSync(path.join(__dirname, '../src/views/index.ejs'), 'utf8');
  const render = ejs.compile(template, { filename: path.join(__dirname, '../src/views/index.ejs') });
  const output = render({ debug: webpackConfig.debug, bundle: '.' + assets.main.js, config });
  fs.writeFileSync(path.join(__dirname, '../build/index.html'), output, 'utf8');
});

//
// Bundle JavaScript, CSS and image files with Webpack
// -----------------------------------------------------------------------------
tasks.set('bundle', () => {
  const webpackConfig = require('../config/webpack.config');
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString(webpackConfig.stats));
        resolve();
      }
    });
  });
});

//
// Build website into a distributable format
// -----------------------------------------------------------------------------
tasks.set('build', () => Promise.resolve()
  .then(() => run('clean'))
  .then(() => run('copy'))
  .then(() => run('bundle'))
  .then(() => run('html'))
);

//
// Build and publish the website
// -----------------------------------------------------------------------------
tasks.set('publish', () => {
  global.DEBUG = process.argv.includes('--debug') || false;
  return run('build')
    // .then(() => firebase.login({ nonInteractive: false }))
    // .then(() => firebase.deploy({
    //   project: config.project,
    //   cwd: __dirname,
    // }))
    .then(() => { setTimeout(() => process.exit()); });
});

//
// Build website and launch it in a browser for testing (default)
// -----------------------------------------------------------------------------
tasks.set('start', () => Promise.resolve()
  .then(() => run('copy'))
  .then(() => run('run-dev'))
);

tasks.set('run-dev', () => {
  global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
  const template = fs.readFileSync(path.join(__dirname, '../src/views/index.ejs'), 'utf8');
  const render = ejs.compile(template, { filename: path.join(__dirname, '../src/views/index.ejs') });
  const output = render({ debug: true, bundle: './dist/main.js', config });
  fs.writeFileSync(path.join(__dirname, '../build/index.html'), output, 'utf8');
  const webpackConfig = require('../config/webpack.config');
  webpackConfig.entry.unshift("webpack-dev-server/client?http://127.0.0.1:3000/", "webpack/hot/dev-server");
  const bundler = webpack(webpackConfig);
  return new Promise(resolve => {
    // browserSync({
    //   ghostMode: false,
    //
    //   snippetOptions: {
    //     rule: {
    //       match: /qqqqqqqqq/
    //     }
    //   },
    //
    //   server: {
    //     baseDir: 'build',
    //
    //     middleware: [
    //       webpackDevMiddleware(bundler, {
    //         // IMPORTANT: dev middleware can't access config, so we should
    //         // provide publicPath by ourselves
    //         publicPath: webpackConfig.output.publicPath,
    //
    //         // pretty colored output
    //         stats: webpackConfig.stats,
    //
    //         // for other settings see
    //         // http://webpack.github.io/docs/webpack-dev-middleware.html
    //       }),
    //
    //       // bundler should be the same as above
    //       webpackHotMiddleware(bundler),
    //
    //       // Serve index.html for all unknown requests
    //       (req, res, next) => {
    //         if (req.headers.accept && req.headers.accept.startsWith('text/html')) {
    //           req.url = '/index.html'; // eslint-disable-line no-param-reassign
    //         }
    //         next();
    //       },
    //     ],
    //   },
    //
    //   // no need to watch '*.js' and '*.less' here, webpack will take care of it for us,
    //   // including full page reloads if HMR won't work
    //   files: [
    //     path.join(__dirname, '../src/**/*.css'),
    //     path.join(__dirname, '../src/**/*.html'),
    //   ],
    // });

    var server = new webpackDevServer(bundler, {
      // webpack-dev-server options

      contentBase: "build",
      // Can also be an array, or: contentBase: "http://localhost/",

      publicPath: webpackConfig.output.publicPath,

      hot: true,
      // Enable special support for Hot Module Replacement
      // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
      // Use "webpack/hot/dev-server" as additional module in your entry point
      // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

      inline: true,
      noInfo: false,
      historyApiFallback: true,

      // pretty colored output
      stats: webpackConfig.stats,

      // for other settings see
      // http://webpack.github.io/docs/webpack-dev-middleware.html
    });

    server.listen(3000, '127.0.0.1', function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log('Listening at 127.0.0.1:3000');
    });

    resolve();
  });
});

// Execute the specified task or default one. E.g.: node run build
run(process.argv[2] || 'start');
