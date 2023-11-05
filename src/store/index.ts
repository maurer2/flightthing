import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import type { Store as StoreRedux } from 'redux';
import type { SensorAction, Store } from './types';

import reducers from './reducers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store: StoreRedux<Store, SensorAction> & {
  dispatch: (action: SensorAction) => SensorAction;
} = createStore(reducers, applyMiddleware(logger));

export default store;
