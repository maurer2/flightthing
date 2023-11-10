/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

import type { ReactElement } from 'react';

// type GyroscopeProps = Record<string, never>;

function Gyroscope(): ReactElement {
  // const [x, setX] = useState(0);

  useEffect(() => {
    if (!('Gyroscope' in window)) {
      return undefined;
    }

    const gyroscope: Sensor = new (window.Gyroscope as any)();
    console.log(gyroscope);

    gyroscope.onreading = (event) => {
      console.log(event);
    };

    gyroscope.start();

    return () => {
      gyroscope.stop();
    };
  }, []);

  return <div>Gyroscope</div>;
}

export default Gyroscope;
