import {dispatchActionSaga} from 'rosmaro-redux';
import {all} from 'redux-saga/effects';

export default function*() {
  yield all([dispatchActionSaga()]);
}
