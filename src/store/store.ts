/* eslint-disable import/prefer-default-export */

import type { Store } from './types';

export const initialState: Store = {
  sensor: {
    name: 'Testsensor',
    value: 0,
    unit: 'unit',
  },
};
