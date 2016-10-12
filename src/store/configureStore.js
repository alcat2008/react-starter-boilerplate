/* eslint-disable import/newline-after-import */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers';
const middleware = [thunkMiddleware, promiseMiddleware];

export default function configureStore(initialState, onComplete: ?() => void) {
  let finalCreateStore;
  let devEnhancer;
  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  } else {
    /* eslint-disable global-require, import/no-extraneous-dependencies */
    // const devTools = require('remote-redux-devtools');
    const createLogger = require('redux-logger');
    const loggerMiddleware = createLogger({ duration: true });
    finalCreateStore = compose(
      applyMiddleware(...middleware, loggerMiddleware),
      // devTools({ realtime: true })
    )(createStore);

    devEnhancer = window.devToolsExtension && window.devToolsExtension();
  }

  const store = finalCreateStore(rootReducer, initialState, devEnhancer);
  onComplete && onComplete();

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store;
}
