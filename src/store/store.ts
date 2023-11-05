import SensorValue from '../types/SensorValue';

import type { Store } from './types';

export const initialState: Store = {
  sensor: {
    name: 'Rotation Y-Axis',
    value: SensorValue.fromDegrees(0),
  },
};
