import type { Sensor, SensorAction, Test, TestAction } from './types';

import { TEST, UPDATE_SENSOR } from './actionTypes';

export function updateSensor(sensor: Sensor): SensorAction {
  const action: SensorAction = {
    type: UPDATE_SENSOR,
    payload: sensor,
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
