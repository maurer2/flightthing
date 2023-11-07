import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import sensorsSlice from './sensorsSlice';

const store = configureStore({
  reducer: {
    sensors: sensorsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware: [logger] as const,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default store;
