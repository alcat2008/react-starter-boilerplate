
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'antd/dist/antd.less';

import configureStore from '../store/configureStore';
import analytics from '../actions/analytics';

// import { setLayout } from '../actions/device';
// import { initApp } from '../actions/global';
import routes from '../routes';

const setup = () => {
  const store = configureStore({});
  const history = syncHistoryWithStore(browserHistory, store);

  history.listen(location => analytics.track(location.pathname));

  // const AppContainer = setupWithComponents(store, history);
  const AppContainer = () => (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );

  return AppContainer;
};

export default setup();
