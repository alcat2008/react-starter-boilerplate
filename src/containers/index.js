
import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/configureStore';
import analytics from '../actions/analytics';
import routes from '../routes';

const setup = () => {
  const store = configureStore({});
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
