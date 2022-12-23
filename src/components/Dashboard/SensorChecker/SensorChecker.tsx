/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment, useId } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { querySensor, updateSensor } from '../../../store/actionCreators';
import SensorValue from '../../../types/SensorValue';

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
        value: SensorValue.fromRadians(valueAsNumber),
      }),
    );
  };

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    dispatch(querySensor());
  }

  return (
    <>
      <h2 className="mb-4 text-xl">{name}</h2>
      <button
        type="button"
        onClick={handleClick}
        className="mb-4 py-2 px-4 bg-white hover:bg-gray-200 text-blue-500 font-semibold"
      >
        Trigger random update
      </button>
      <div>
        <label htmlFor={sliderId}>Set manual value</label>
        <input
          type="range"
          value={sensor.value.inRadians}
          id={sliderId}
          name={sliderId}
          min="0"
          max={Math.PI * 2} // 1 rotation
          step={0.0001}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
      <dl className="grid grid-cols-[min-content_minmax(0,_1fr)] gap-x-4 gap-y-1">
        {Object.entries(sensor).map(
          ([key, value]): ReactElement => (
            <Fragment key={key}>
              <dt>
                <code>{key}</code>
              </dt>
              <dd>
                <code>{typeof value === 'string' ? value : value.inRadians}</code>
              </dd>
            </Fragment>
          ),
        )}
      </dl>
    </>
  );
}

export default SensorChecker;
