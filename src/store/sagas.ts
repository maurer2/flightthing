/* eslint-disable import/prefer-default-export */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import type { Sensor } from './types';

import { updateSensor } from './actionCreators';
import { UPDATE_SENSOR } from './actionTypes';

function getSensorData(): Sensor {
  return {
    name: 'Test',
    value: Math.random(),
    unit: 'Test',
  } as Sensor;
}

function* getSensorDataSaga() {
  console.log('getSensorDataSaga');

  try {
    const response: Sensor = yield call(getSensorData);

    yield put(updateSensor(response));
  } catch (error) {
    console.log(error);

    // yield put(
    //   updateSensor({
    //     name: 'Error',
    //     value: 0,
    //     unit: '',
    //   }),
    // );
  }
}

export function* updateSensorSaga() {
  yield all([takeLatest(UPDATE_SENSOR, getSensorDataSaga)]);
}
