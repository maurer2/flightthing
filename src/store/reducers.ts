import type { Actions, Store } from './types';

import { QUERY_SENSOR, UPDATE_SENSOR } from './actionTypes';
import { initialState } from './store';

// stackoverflow.com/questions/54408912/how-to-decompose-typescript-discriminated-union-switch-block-and-keep-it-exhau
// birukov.me/blog/all/exhaustive-type-checks.html
function assertNever(value: never): never {
  throw new Error(`Missing value: ${value}`);
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducers = (state: NonNullable<Store> = initialState, action: Actions): Store => {
  const { type } = action;
  switch (type) {
    case QUERY_SENSOR:
      return {
        ...state,
      };
    case UPDATE_SENSOR:
      return {
        ...state,
        sensor: action.payload,
      };
    default: {
      // allow @@redux/INIT actions to pass thru
      if (type in action) {
        assertNever(type);
      }

      return {
        ...state,
      };
    }
  }
};

export default reducers;
