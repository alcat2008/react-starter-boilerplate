
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
          path: 'resources',
          // indexRoute: { component: Developer.Basic },
          childRoutes: [
            { path: 'server', component: Developer.Server },
            { path: 'mirror', component: Developer.Mirror },
            { path: 'dbs', component: Developer.DbSchema },
            { path: 'repos', component: Developer.Repos },
            { path: 'domain', component: Developer.Domain },
          ]
        }, {
          path: 'application',
          indexRoute: { component: Developer.Basic },
          childRoutes: [
            { path: 'basic', component: Developer.Basic },
            { path: 'services', component: Developer.Services },
            { path: 'service/:subdomain/:name', component: Developer.ServiceInfo },
            { path: 'flows', component: Developer.Flows },
          ]
        }, {
          path: 'devops',
          indexRoute: { component: Developer.Build },
          childRoutes: [
            { path: 'build', component: Developer.Build },
            { path: 'sandbox', component: Developer.Sandbox },
            { path: 'deploy', component: Developer.Deploy },
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
