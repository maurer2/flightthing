/* eslint-disable import/prefer-default-export */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import type { Sensor } from './types';

import { updateSensor } from './actionCreators';
import { QUERY_SENSOR } from './actionTypes';

function getSensorData(): Sensor {
  return {
    name: 'Sagas Sensor',
    value: Math.random() * Math.PI * 2,
    unit: 'rad',
  };
}

function* getSensorDataSaga() {
  try {
    const response: Sensor = yield call(getSensorData);

    // yield put({ type: 'UPDATE_SENSOR', response });
    yield put(updateSensor(response));
  } catch (error) {
    console.log(error);

    yield put(
      updateSensor({
        name: 'Error',
        value: 0,
        unit: '',
      }),
    );
  }
}

export function* updateSensorSaga() {
  yield all([takeLatest(QUERY_SENSOR, getSensorDataSaga)]);
}
