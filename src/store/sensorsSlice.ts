// import SensorValue from '../types/SensorValue';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Vector3 } from 'three';

import { createSlice } from '@reduxjs/toolkit';

import type { Sensor } from './types';

export const sensorIds = ['rotationYAxis', 'rotationXAxis', 'rotationZAxis'] as const;
export type SensorId = (typeof sensorIds)[number];

type SensorsState = Record<SensorId, Sensor>;

const initialState: SensorsState = {
  rotationXAxis: {
    isBusy: false,
    name: 'Rotation X-Axis',
    value: 0,
  },
  rotationYAxis: {
    isBusy: false,
    name: 'Rotation Y-Axis',
    value: 0,
  },
  rotationZAxis: {
    isBusy: false,
    name: 'Rotation Z-Axis',
    value: 0,
  },
};

const sensorsSlice = createSlice({
  initialState,
  name: 'sensors',
  reducers: {
    querySensor(state, action: PayloadAction<{ id: SensorId }>) {
      const { id } = action.payload;

      state[id].isBusy = true;
    },
    updateSensor(state, action: PayloadAction<{ id: SensorId; value: number }>) {
      const { id, value } = action.payload;

      state[id].value = value;
      state[id].isBusy = false;
    },
    updateSensors(state, action: PayloadAction<{ value: Vector3 }>) {
      const { value } = action.payload;

      sensorsSlice.caseReducers.updateSensor(state, {
        payload: { id: 'rotationXAxis', value: value.x },
        type: 'updateSensor',
      });
      sensorsSlice.caseReducers.updateSensor(state, {
        payload: { id: 'rotationYAxis', value: value.y },
        type: 'updateSensor',
      });
      sensorsSlice.caseReducers.updateSensor(state, {
        payload: { id: 'rotationZAxis', value: value.z },
        type: 'updateSensor',
      });
    },
  },
});

export const { querySensor, updateSensor, updateSensors } = sensorsSlice.actions;

export default sensorsSlice.reducer;
