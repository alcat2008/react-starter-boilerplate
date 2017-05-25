# react-starter-boilerplate

The starter boilerplate is designed to get you up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich webpack build system that's already setup to provide hot reloading, CSS modules with Sass support, unit testing, code coverage reports, bundle splitting, and a whole lot more.

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](http://expressjs.com/)
* [eslint](http://eslint.org)

## Requirements
* node `^6.0.0`
* npm `^3.8.6`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can follow these steps to get the project up and running:

```bash
$ git clone https://github.com/alcat2008/react-starter-boilerplate.git
$ cd react-starter-boilerplate
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/alcat2008/react-starter-boilerplate/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related files
│   └── dist                 # The folder for compiled output
├── config                   # Project configuration settings
│   └── webpack.config.js    # Environment-specific configuration files for webpack
├── node_modules             # 3rd-party libraries and utilities
│── public               # Static files such as favicon.ico etc
│   ├── favicon.ico      # Application icon to be displayed in bookmarks
│   ├── robots.txt       # Instructions for search engine crawlers
│   ├── index.html       # Html templates
    └── ...              # etc
├── server                   # Express application
│   └── app.js               # Server application entry point
├── src                      # Application source code
│   ├── actions              # This list of application actions
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── reducers             # This list of application reducers
│   ├── store                # Redux-specific pieces
│   │   └── configureStore.js# Create and instrument redux store
│   ├── styles               # Application-wide styles (generally settings)
│   ├── index.js             # React application entry point
│   └── routes.js            # Main route definitions and async split points
│── test                     # Unit and integration tests
│── .editorconfig            # Defining coding styles
│── .eslintignore            # Ignoring files and directories from linting
│── .eslintrc                # Linting rules
│── LICENSE.md               # License text
│── package.json             # The list of project dependencies and NPM scripts
└── README.md                # Introductions to the project
```

## Development

#### Developer Tools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

However, adding the DevTools components to your project is simple. First, grab the packages from npm:

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

### Routing
We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. If you are using `redux-cli`, test files should automatically be generated when you create a component or redux module.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run deploy` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

### Static Deployments
If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. If you are unsure of how to do this, you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) helpful. The Koa server that comes with the starter kit is able to be extended to serve as an API or whatever else you need, but that's entirely up to you.

## Log

Log state enable is currently persisted by localStorage. You can enable this using localStorage.debug:

```bash
localStorage.debug = 'react-starter:*'
```

And then refresh the page.

## Build System

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/index.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|

### Styles

Both `.less` and `.css` file extensions are supported out of the box and are configured to use [CSS Modules](https://github.com/css-modules/css-modules). After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

### Server

This starter kit comes packaged with an Express server. It's important to note that the sole purpose of this server is to provide mock data for web. And is easier to extend the starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base boilerplate.

### Production Optimization

Babel is configured to use [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined. Additionally, in production, we use [react-optimize](https://github.com/thejameskyle/babel-react-optimize) to further optimize your React code.

In production, webpack will extract styles to a `.css` file, minify your JavaScript, and perform additional optimizations such as module deduplication.

## Learning Resources

## FAQ

Having trouble? Check out our [FAQ](https://github.com/alcat2008/react-starter-boilerplate/wiki/FAQ:-Frequently-Asked-Questions) or submit an issue. Please be considerate by only posting issues that are directly related to this project; questions about how to implement certain React or Redux features are both best suited for StackOverflow or their respective repositories.


And to everyone else who has contributed, even if you are not listed here your work is appreciated.
