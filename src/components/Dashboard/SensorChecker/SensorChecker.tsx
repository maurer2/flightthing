import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { updateSensor } from '../../../store/actionCreators';

import type { MouseEvent, ReactElement } from 'react';
import type { Sensor, Store } from '../../../store/types';
import type { PropsSensorChecker } from './types';

function SensorChecker({ name }: PropsSensorChecker): ReactElement {
  const dispatch = useDispatch();
  const sensor = useSelector<Store, Sensor>((state: Store) => state.sensor, shallowEqual);

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    dispatch(
      updateSensor({
        name: 'TestSensor',
        value: Math.random() * 10,
        unit: 'unit',
      }),
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Update Sensor
      </button>
      <code>
        <pre>{JSON.stringify(sensor, null, 4)}</pre>
      </code>
    </div>
  );
}

export default SensorChecker;
