import type { Sensor, SensorAction, SensorQueryAction } from './types';

import { QUERY_SENSOR, UPDATE_SENSOR } from './actionTypes';

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
