import { createSlice } from '@reduxjs/toolkit';

import SensorValue from '../types/SensorValue';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { SensorNew } from './types';

const sensorIds = ['rotationYAxis', 'rotationXAxis', 'rotationZAxis'] as const;
type SensorId = typeof sensorIds[number];

type SensorsState = {
  sensors: Record<SensorId, SensorNew>;
};

const initialState: SensorsState = {
  sensors: {
    rotationYAxis: {
      name: 'Rotation Y-Axis',
      value: SensorValue.fromDegrees(0),
      isBusy: false,
    },
    rotationXAxis: {
      name: 'Rotation X-Axis',
      value: SensorValue.fromDegrees(0),
      isBusy: false,
    },
    rotationZAxis: {
      name: 'Rotation Z-Axis',
      value: SensorValue.fromDegrees(0),
      isBusy: false,
    },
  },
};

const sensorsSlice = createSlice({
  name: 'sensors',
  initialState,
  reducers: {
    sensorQueried(state, action: PayloadAction<{ id: SensorId }>) {
      const { id } = action.payload;

      state.sensors[id].isBusy = true;
    },
    sensorUpdated(state, action: PayloadAction<{ id: SensorId; value: SensorValue }>) {
      const { id, value } = action.payload;

      state.sensors[id].value = value;
      state.sensors[id].isBusy = false;
    },
  },
});

export const { sensorQueried, sensorUpdated } = sensorsSlice.actions;

export default sensorsSlice.reducer;
