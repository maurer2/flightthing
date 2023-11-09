import React, { useEffect, useState } from 'react';

import type { ReactElement } from 'react';

type GyroscopeProps = Record<string, never>;

function Gyroscope() {
  const [x, setX] = useState(0);

  useEffect(() => {
    if (!('Gyroscope' in window)) {
      return;
    }

    const gyroscope: Sensor = new (window.Gyroscope as any)();
    console.log(gyroscope)

    gyroscope.onreading = (event) => {
      console.log(event);
    };

    gyroscope.start();

    () => {
      gyroscope.stop();
    };
  }, []);

  // useEffect(() => {
  //   if (!('Gyroscope' in window)) {
  //     return;
  //   }

  //   const gyroscope: Sensor = new (Gyroscope as any)({ frequency: 60 });

  //   gyroscope.onreading = (event) => {
  //     console.log(event);
  //   };

  //   gyroscope.start();
  //   () => {
  //     gyroscope.stop();
  //   };
  // }, []);

  return <div>Gyroscope</div>;
}

export default Gyroscope;
