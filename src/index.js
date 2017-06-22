
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';

import AppContainer from './containers';
import registerServiceWorker from './registerServiceWorker';

function initComponent() {
  ReactDOM.render(
    <AppContainer />, // eslint-disable-line
    document.getElementById('root')
  );
}

initComponent();

// expose React and Perf for __DEV__
if (__DEV__) {
  const Perf = require('react-addons-perf'); // eslint-disable-line global-require, import/no-extraneous-dependencies

  window.React = React;
  window.Perf = Perf;
}

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

registerServiceWorker();
