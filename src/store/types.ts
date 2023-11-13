// import type SensorValue from '../types/SensorValue';
// import type { SensorId } from './sensorsSlice';

export type Sensor = {
  isBusy: boolean;
  name: string;
  value: number; // radians
};
