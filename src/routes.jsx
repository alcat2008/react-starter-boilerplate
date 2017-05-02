
import { App, Home, NotFound, Console, Developer } from './components/index';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    // { path: 'home', component: HomePage },
    { path: 'console', component: Console },
    { path: 'developer', component: Developer },
    { path: '*', component: NotFound },
  ]
};

export default routes;
