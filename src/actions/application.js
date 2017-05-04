
import { createAction } from 'redux-actions';
import * as types from '../constant/dictActions';

// import debug from 'debug';
// import { PFetch } from '../utils/fetch';
// import links from '../constant/links';

// const log = debug('react-starter:actions/application');

// export const getServices = params => () => PFetch(links.scan.dsl, params);
export const getServices = createAction(types.SERVICE_LIST_GET);
export const getFlows = createAction(types.SERVICE_FLOW_GET);
export const getInfo = createAction(types.SERVICE_INFO_GET);
