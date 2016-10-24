
import { App, Home, Foo, SubPage, DemoWrapper, NotFound } from './components';
import {
  ListBasic,
  ListSelection,
  Tree,
  ModalBasic,
  ModalAsync,
  ModalConfirm,
  ModalConfirmPromise,
  ModalInfo,
  ModalManual,
} from './components/demos';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'foo', component: Foo },
    { path: 'page:index', component: SubPage },
    {
      path: 'demo',
      component: DemoWrapper,
      indexRoute: { component: ListBasic },
      childRoutes: [
        {
          path: 'list',
          indexRoute: { component: ListBasic },
          childRoutes: [
            { path: 'basic', component: ListBasic },
            { path: 'selection', component: ListSelection },
          ]
        },
        { path: 'tree', component: Tree },
        {
          path: 'modal',
          indexRoute: { component: ModalBasic },
          childRoutes: [
            { path: 'basic', component: ModalBasic },
            { path: 'async', component: ModalAsync },
            { path: 'confirm', component: ModalConfirm },
            { path: 'confirm-promise', component: ModalConfirmPromise },
            { path: 'info', component: ModalInfo },
            { path: 'manual', component: ModalManual },
          ]
        },
      ]
    },
    { path: '*', component: NotFound },
  ]
};

export default routes;
