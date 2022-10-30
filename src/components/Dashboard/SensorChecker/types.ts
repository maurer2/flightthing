import type { Sensor } from '../../../store/types';

export type PropsSensorChecker = {
  name: string;
};

export type SensorKeys = {
  [K in keyof Sensor]: string;
};
