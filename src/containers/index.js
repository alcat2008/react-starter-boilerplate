
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/configureStore';
import analytics from '../service/analytics';
import routes from '../routes';

const setup = () => {
  const store = configureStore({});
  const history = syncHistoryWithStore(browserHistory, store);
  history.listen(location => analytics.track(location.pathname));

  const AppContainer = () => (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );

  return AppContainer;
};

export default setup();
