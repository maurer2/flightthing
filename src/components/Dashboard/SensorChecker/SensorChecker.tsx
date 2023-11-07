/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment, useId } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { useAppDispatch } from '../../../store';
import { updateSensor } from '../../../store/sensorsSlice';
import SensorValue from '../../../types/SensorValue';

import type { FormEvent, MouseEvent, ReactElement } from 'react';
import type { RootState } from '../../../store';
import type { Sensor } from '../../../store/types';
import type { PropsSensorChecker } from './types';

const numberFormatter = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function SensorChecker({ id }: PropsSensorChecker): ReactElement {
  const dispatch = useAppDispatch();
  const sensor = useSelector<RootState, Sensor>((state) => state.sensors[id], shallowEqual);
  const sliderId: string = useId();
  const valueObject = SensorValue.fromRadians(sensor.value);

  const handleSliderChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { valueAsNumber } = event.currentTarget;

    dispatch(
      updateSensor({
        id,
        value: valueAsNumber,
      }),
    );
  };

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    dispatch(
      updateSensor({
        id,
        value: Math.random() * Math.PI * 2,
      }),
    );
  }

  return (
    <>
      <h2 className="mb-4 text-xl">
        {sensor.name} ({id})
      </h2>
      <button
        type="button"
        onClick={handleClick}
        className="mb-4 py-2 px-4 bg-white hover:bg-gray-200 text-blue-500 font-semibold"
      >
        Trigger random update
      </button>
      <dl className="grid grid-cols-[max-content_minmax(0,_1fr)] gap-x-4 gap-y-1">
        <dt>Value in degrees:</dt>
        <dd>{numberFormatter.format(valueObject.inDegrees)}</dd>
        <dt>Value in multiples of &Pi;:</dt>
        <dd>{numberFormatter.format(valueObject.inMultiplesOfPi)}</dd>
      </dl>
      <div>
        <label htmlFor={sliderId}>Set manual value</label>
        <input
          type="range"
          value={sensor.value}
          id={sliderId}
          name={sliderId}
          min="0"
          max={Math.PI * 2} // 1 rotation
          step={0.0001}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
    </>
  );
}

export default SensorChecker;
