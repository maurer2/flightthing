import type SensorValue from '../types/SensorValue';
import type { QUERY_SENSOR, UPDATE_SENSOR } from './actionTypes';

export type Sensor = {
  name: string;
  value: SensorValue;
};

export type Store = {
  sensor: Sensor;
};

export type SensorAction = {
  type: typeof UPDATE_SENSOR;
  payload: Sensor;
};

export type SensorQueryAction = {
  type: typeof QUERY_SENSOR;
};

export type Actions = SensorAction | SensorQueryAction;
