import type { ReactElement } from 'react';

import React, { useEffect } from 'react';
import { Vector3 } from 'three';

import { useAppDispatch } from '../../../store';
import { updateSensors } from '../../../store/sensorsSlice';
import SensorValue from '../../../types/SensorValue';

function Accelerometer(): ReactElement {
  // const [value, setValue] = useState<Vector3>(new Vector3(0, 0, 0));
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleOrientationChange(event: DeviceOrientationEvent): void {
      const { alpha, beta, gamma } = event;

      if (!alpha || !beta || !gamma) {
        return;
      }

      const newValue = new Vector3(
        SensorValue.fromDegrees(alpha).inRadians, // todo mapping 0 - 360
        SensorValue.fromDegrees(beta).inRadians, // todo mapping -180 - +180
        SensorValue.fromDegrees(gamma).inRadians, // todo mapping -90 - +90
      );

      dispatch(
        updateSensors({
          value: newValue,
        }),
      );
      // setValue(newValue);
    }

    window.addEventListener('deviceorientation', handleOrientationChange);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientationChange);
    };
  }, [dispatch]);

  // works but not testable via dev tools sensor emulation
  // useEffect(() => {
  //   if (!('Accelerometer' in window)) {
  //     return undefined;
  //   }

  //   function handleReading(event: Event) {
  //     console.log(event);
  //   }

  //   const sensor: Sensor = new (window.Accelerometer as any)();

  //   sensor.start();
  //   sensor.addEventListener('reading', handleReading);

  //   return () => {
  //     sensor.stop();
  //     sensor.removeEventListener('reading', handleReading);
  //   };
  // }, []);

  return <h2>Accelerometer</h2>;
}

export default Accelerometer;
