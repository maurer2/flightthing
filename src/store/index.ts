import { createStore } from 'redux';

import type { Store as StoreRedux } from 'redux';
import type { SensorAction, Store } from './types';

import reducers from './reducers';

const store: StoreRedux<Store, SensorAction> & {
  dispatch: (action: SensorAction) => SensorAction;
} = createStore(reducers);

export default store;
