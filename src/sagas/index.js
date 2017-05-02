import { call, put, takeEvery } from 'redux-saga/effects';
import { PFetch } from '../utils/fetch';
import links from '../constant/links';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync(action) {
  yield call(delay, 1000);
  yield put({ type: 'INCREASE', payload: action.payload });
}

function* getServices() {
  const subdomains = yield PFetch(links.scan.dsl);
  yield put({ type: 'SERVICE_LIST', payload: subdomains });
}

export default function* counterSaga() {
  yield takeEvery('INCREASE_ASYNC', incrementAsync);
  yield takeEvery('SERVICE_LIST_GET', getServices);
}
