
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import configureStore from '../store/configureStore';

// import { setLayout } from '../actions/device';
// import { initApp } from '../actions/global';

import { App, Home, Foo, Bar } from '../components';


const setup = () => {
  const store = configureStore({});
  const history = syncHistoryWithStore(browserHistory, store);

  // eslint-disable-next-line arrow-body-style
  const AppContainer = () => {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="foo" component={Foo} />
              <Route path="bar" component={Bar} />
            </Route>
          </Router>
        </div>
      </Provider>
    );
  };

  return AppContainer;
};

export default setup();
