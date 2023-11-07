// import type SensorValue from '../types/SensorValue';
// import type { SensorId } from './sensorsSlice';

export type Sensor = {
  name: string;
  value: number; // radians
  isBusy: boolean;
};
