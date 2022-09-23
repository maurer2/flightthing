import type { TEST, UPDATE_SENSOR } from './actionTypes';

export type Sensor = {
  name: string;
  value: number;
  unit: string;
};

export type Test = string;

export type Store = {
  sensor: Sensor;
  test: Test;
};

export type SensorAction = {
  type: typeof UPDATE_SENSOR;
  payload: Sensor;
};

export type TestAction = {
  type: typeof TEST;
  payload: Test;
};

export type Actions = SensorAction | TestAction;
