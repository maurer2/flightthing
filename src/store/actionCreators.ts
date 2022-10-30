import type { Sensor, SensorAction, SensorQueryAction, Test, TestAction } from './types';

import { QUERY_SENSOR, TEST, UPDATE_SENSOR } from './actionTypes';

export function updateSensor(sensor: Sensor): SensorAction {
  const action: SensorAction = {
    type: UPDATE_SENSOR,
    payload: sensor,
  };

  return action;
}

export function querySensor(): SensorQueryAction {
  const action: SensorQueryAction = {
    type: QUERY_SENSOR,
  };

  return action;
}

export function test(sensor: Test): TestAction {
  const action: TestAction = {
    type: TEST,
    payload: sensor,
  };

  return action;
}
