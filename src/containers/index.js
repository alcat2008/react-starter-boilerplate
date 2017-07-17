
import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/configureStore';
import analytics from '../services/analytics';
import routes from '../routes';
import { initApp } from '../actions/global';

const setup = () => {
  const store = configureStore({});
  store.dispatch(initApp());

  const history = syncHistoryWithStore(hashHistory, store);
  history.listen(location => analytics.track(location.pathname));

  const AppContainer = () => (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );

  return AppContainer;
};

export default setup();
