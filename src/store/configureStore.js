
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
const middleware = [thunkMiddleware, promiseMiddleware];

export default function configureStore(initialState, onComplete: ?() => void) {
  let finalCreateStore;
  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  } else {
    const loggerMiddleware = createLogger({ duration: true });
    finalCreateStore = compose(
      applyMiddleware(...middleware, loggerMiddleware),
      devTools({ realtime: true })
    )(createStore);
  }

  const store = finalCreateStore(rootReducer, initialState);
  onComplete && onComplete();

  return store;
}
