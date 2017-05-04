
// import { message } from 'antd';
import { call, put, takeEvery } from 'redux-saga/effects';
import { PFetch } from '../utils/fetch';
import links from '../constant/links';
import * as types from '../constant/dictActions';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* errorHandler(func, action) {
  // yield put({ type: types.APP_LOADING_START });
  try {
    yield call(func, action);
    // yield func(action);
  } catch (error) {
    // yield put({ type: types.APP_ERROR, payload: '网络请求失败！' });
    // yield call(delay, 30000);
    // message.error('网络请求失败！');
    console.log('网络请求失败！'); // eslint-disable-line
  }
  // yield put({ type: types.APP_LOADING_END });
}

function* incrementAsync(action) {
  yield call(delay, 1000);
  yield put({ type: types.INCREASE, payload: action.payload });
}

function* getServices() {
  const data = yield PFetch(links.scan.dsl);
  yield put({ type: types.SERVICE_LIST, payload: data });
}

function* getFlows() {
  const data = yield PFetch(links.scan.dsl);
  yield put({ type: types.SERVICE_FLOW, payload: data });
}

function* getInfo(action) {
  const serviceInfo = yield PFetch(links.service.info, action.payload);
  yield put({ type: types.SERVICE_INFO, payload: serviceInfo });
}

export default function* counterSaga() {
  yield takeEvery(types.INCREASE_ASYNC, incrementAsync);
  yield takeEvery(types.SERVICE_LIST_GET, errorHandler, getServices);
  yield takeEvery(types.SERVICE_FLOW_GET, errorHandler, getFlows);
  yield takeEvery(types.SERVICE_INFO_GET, errorHandler, getInfo);
}
