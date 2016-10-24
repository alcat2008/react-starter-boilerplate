
/* eslint-disable */

const path = require('path');
const fs = require('fs');
const del = require('del');
const ejs = require('ejs');
const webpack = require('webpack');
const browserSync = require('browser-sync');

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
  const output = render({ debug: webpackConfig.debug, bundle: assets.main.js, config });
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
tasks.set('build', () => {
  global.DEBUG = process.argv.includes('--debug') || false;
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('copy'))
    .then(() => run('bundle'))
    .then(() => run('html'));
});

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
  .then(() => run('clean'))
  .then(() => run('copy'))
  .then(() => run('run-dev'))
);

tasks.set('run-dev', () => {
  global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
  const template = fs.readFileSync(path.join(__dirname, '../src/views/index.ejs'), 'utf8');
  const render = ejs.compile(template, { filename: path.join(__dirname, '../src/views/index.ejs') });
  const output = render({ debug: true, bundle: '/dist/main.js', config });
  fs.writeFileSync(path.join(__dirname, '../build/index.html'), output, 'utf8');

  return Promise.resolve();
});

// Execute the specified task or default one. E.g.: node run build
run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);
