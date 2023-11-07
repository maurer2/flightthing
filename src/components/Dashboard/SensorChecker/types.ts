import type { SensorId } from '../../../store/sensorsSlice';
import type { Sensor } from '../../../store/types';

export type PropsSensorChecker = {
  id: SensorId;
};

export type SensorKeys = {
  [K in keyof Sensor]: string;
};
