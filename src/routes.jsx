
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
      indexRoute: { component: Developer.Services },
      childRoutes: [
        {
          path: 'application',
          indexRoute: { component: Developer.Services },
          childRoutes: [
            { path: 'basic', component: Developer.Basic },
            { path: 'services', component: Developer.Services },
            { path: 'service/:subdomain/:name', component: Developer.Info },
          ]
        },
      ]
    },
    { path: '*', component: NotFound },
  ]
};

export default routes;
