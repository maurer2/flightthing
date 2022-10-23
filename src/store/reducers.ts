import type { Actions, Store } from './types';

import { TEST, UPDATE_SENSOR } from './actionTypes';
import { initialState } from './store';

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducers = (state: NonNullable<Store> = initialState, action: Actions): Store => {
  const { type } = action;
  switch (type) {
    case UPDATE_SENSOR:
      return {
        ...state,
        sensor: action.payload,
      };
    case TEST:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
