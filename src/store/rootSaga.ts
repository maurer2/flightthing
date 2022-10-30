/* eslint-disable import/prefer-default-export */
import { all, fork } from 'redux-saga/effects';

import { updateSensorSaga } from './sagas';

export function* rootSaga() {
  yield all([fork(updateSensorSaga)]);
}
