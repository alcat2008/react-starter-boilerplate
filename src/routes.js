
import App from './containers/App';
import Home from './containers/Home';
import { Foo, SubPage, NotFound } from './components';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'foo', component: Foo },
    { path: 'page:index', component: SubPage },
    { path: '*', component: NotFound },
  ]
};

export default routes;
