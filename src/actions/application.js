
import { createAction } from 'redux-actions';
// import debug from 'debug';
// import { PFetch } from '../utils/fetch';
// import links from '../constant/links';

// const log = debug('react-starter:actions/application');

// export const getServices = params => () => PFetch(links.scan.dsl, params);
export const getServices = createAction('SERVICE_LIST_GET');
export const getInfo = createAction('SERVICE_INFO_GET');
