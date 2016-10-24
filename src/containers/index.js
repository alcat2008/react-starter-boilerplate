
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/configureStore';
import analytics from '../actions/analytics';

// import { setLayout } from '../actions/device';
// import { initApp } from '../actions/global';

import { App, Home, Foo, SubPage, NotFound } from '../components';

// eslint-disable-next-line no-unused-vars, arrow-body-style
const setupWithComponents = (store, history) => () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="foo" component={Foo} />
          <Route path="page:index" component={SubPage} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>
  );
};

const setupWithRouteConfig = (store, history) => () => {
  const routeConfig = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'foo', component: Foo },
      { path: 'page:index', component: SubPage },
      { path: '*', component: NotFound },
    ]
  };

  return (
    <Provider store={store}>
      <Router history={history} routes={routeConfig} />
    </Provider>
  );
};

const setup = () => {
  const store = configureStore({});
  const history = syncHistoryWithStore(browserHistory, store);

  history.listen(location => analytics.track(location.pathname));

  // const AppContainer = setupWithComponents(store, history);
  const AppContainer = setupWithRouteConfig(store, history);

  return AppContainer;
};

export default setup();
