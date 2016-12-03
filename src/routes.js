
import { App, Home, Foo, SubPage, DemoWrapper, NotFound } from './components';
import {
  District,
  ListBasic,
  ListSelection,
  ListSelectionOperation,
  ListSelectionProps,
  ListPaging,
  ListResetFilter,
  ListHead,
  ListAjax,
  Tree,
  Steps,
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
    require('./components/async'), // eslint-disable-line global-require
    { path: 'foo', component: Foo },
    { path: 'page:index', component: SubPage },
    {
      path: 'demo',
      component: DemoWrapper,
      indexRoute: { component: ListBasic },
      childRoutes: [
        { path: 'district', component: District },
        { path: 'tree', component: Tree },
        { path: 'steps', component: Steps },
        {
          path: 'list',
          indexRoute: { component: ListBasic },
          childRoutes: [
            { path: 'basic', component: ListBasic },
            { path: 'selection', component: ListSelection },
            { path: 'selection-operation', component: ListSelectionOperation },
            { path: 'selection-props', component: ListSelectionProps },
            { path: 'paging', component: ListPaging },
            { path: 'reset-filter', component: ListResetFilter },
            { path: 'head', component: ListHead },
            { path: 'ajax', component: ListAjax },
          ]
        },
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
