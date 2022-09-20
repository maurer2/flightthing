export type Sensor = {
  name: string;
  value: number;
  unit: string;
};

export type Test = {
  name: string;
};

export type Store = {
  sensor: Sensor;
  test: Test;
};

export type SensorAction = {
  type: string;
  payload: Sensor;
};

export type TestAction = {
  type: string;
  payload: Test;
};

// todo discriminate union
export type Actions = SensorAction & TestAction;
