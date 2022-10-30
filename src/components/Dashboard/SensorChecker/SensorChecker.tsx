import React, { useId } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { querySensor, updateSensor } from '../../../store/actionCreators';

import type { FormEvent, MouseEvent, ReactElement } from 'react';
import type { Sensor, Store } from '../../../store/types';
import type { PropsSensorChecker } from './types';

function SensorChecker({ name }: PropsSensorChecker): ReactElement {
  const dispatch = useDispatch();
  const sensor = useSelector<Store, Sensor>((state: Store) => state.sensor, shallowEqual);
  const sliderId: string = useId();

  const handleSliderChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { valueAsNumber } = event.currentTarget;

    dispatch(
      updateSensor({
        name,
        value: valueAsNumber,
        unit: 'rad',
      }),
    );
  };

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    dispatch(querySensor());
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        type="button"
        onClick={handleClick}
        className="bg-white text-blue-500 font-semibold py-2 px-4 border border-black-500 rounded"
      >
        Update Sensor {name}
      </button>
      <div>
        <label htmlFor={sliderId}>Slider</label>
        <input
          type="range"
          value={sensor.value}
          id={sliderId}
          name={sliderId}
          min="0"
          max={Math.PI * 2} // 1 rotation
          step={0.01}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
      <code>
        <pre>{JSON.stringify(sensor, null, 4)}</pre>
      </code>
    </div>
  );
}

export default SensorChecker;