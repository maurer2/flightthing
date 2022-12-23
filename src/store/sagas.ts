/* eslint-disable import/prefer-default-export */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import SensorValue from '../types/SensorValue';

import type { Sensor } from './types';

import { updateSensor } from './actionCreators';
import { QUERY_SENSOR } from './actionTypes';

function getSensorData(): Sensor {
  return {
    name: 'Rotation Y-Axis',
    value: SensorValue.fromRadians(Math.random() * Math.PI * 2),
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
        value: SensorValue.fromRadians(0),
      }),
    );
  }
}

export function* updateSensorSaga() {
  yield all([takeLatest(QUERY_SENSOR, getSensorDataSaga)]);
}
