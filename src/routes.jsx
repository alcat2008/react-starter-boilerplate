
import { App, Home, NotFound, Console, Developer } from './components/index';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    // { path: 'home', component: HomePage },
    { path: 'console', component: Console },
    {
      path: 'developer',
      component: Developer.Wrapper,
      // indexRoute: { component: Developer.Basic },
      indexRoute: { onEnter: (nextState, replace) => replace('/developer/application/basic') },
      // indexRedirect: { to: 'application/basic' },
      childRoutes: [
        {
          path: 'application',
          indexRoute: { component: Developer.Basic },
          childRoutes: [
            { path: 'basic', component: Developer.Basic },
            { path: 'services', component: Developer.Services },
            { path: 'service/:subdomain/:name', component: Developer.Info },
            { path: 'flows', component: Developer.Flows },
          ]
        }, {
          path: 'monitor',
          indexRoute: { component: Developer.Logs },
          childRoutes: [
            { path: 'logs', component: Developer.Logs },
            { path: 'dbquery', component: Developer.DbQuery },
          ]
        },
      ]
    },
    { path: '*', component: NotFound },
  ]
};

export default routes;
