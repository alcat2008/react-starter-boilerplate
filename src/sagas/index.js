import { call, put, takeEvery } from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync(action) {
  yield call(delay, 1000);
  yield put({ type: 'INCREASE', payload: action.payload });
}

export default function* counterSaga() {
  yield takeEvery('INCREASE_ASYNC', incrementAsync);
}
