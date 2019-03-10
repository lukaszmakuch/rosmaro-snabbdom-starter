import {dispatchActionSaga, matchEffect} from 'rosmaro-redux';
import {all, takeEvery, put, delay} from 'redux-saga/effects';

function* ping(action) {
  yield delay(1500);
  yield(put({type: 'PONG'}));
}

export default function*() {
  yield all([
    dispatchActionSaga(),
    takeEvery(matchEffect('PING'), ping),
  ]);
}
