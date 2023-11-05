import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import sensorsSlice from './sensorsSlice';

const store = configureStore({
  reducer: {
    sensor: sensorsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
