import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import type { Store as StoreRedux } from 'redux';
import type { SensorAction, Store } from './types';

import reducers from './reducers';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store: StoreRedux<Store, SensorAction> & {
  dispatch: (action: SensorAction) => SensorAction;
} = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
