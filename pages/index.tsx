// import Gyroscope from '../src/components/Sensors/Gyroscope/Gyroscope';
import type { NextPage } from 'next';
import type { ReactElement } from 'react';

import Head from 'next/head';

import Canvas3D from '../src/components/Canvas3D/Canvas3D';
import SensorChecker from '../src/components/Dashboard/SensorChecker';
import Accelerometer from '../src/components/Sensors/Accelerometer/Accelerometer';

// import Image from 'next/image'

// https://stackoverflow.com/questions/71144514/type-error-when-using-function-with-the-return-type-nextpage
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = (): ReactElement => {
  // const sensor = useSelector<Store, Sensor>((state: Store) => state.sensor, shallowEqual);
  console.log('Home');

  return (
    <div
      className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white text-black"
      data-testid="app"
    >
      <Head>
        <title>Flightthting</title>
        <meta content="Flightthting" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header className="bg-blue-500 p-4" data-testid="app-header">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <SensorChecker id="rotationYAxis" />
          </div>
          <div className="col-span-1">
            <SensorChecker id="rotationXAxis" />
          </div>
          <div className="col-span-1">
            <SensorChecker id="rotationZAxis" />
          </div>
        </div>
      </header>

      <main className="">
        <Canvas3D />
      </main>

      <Accelerometer />

      <footer className="bg-blue-500">Footer</footer>
    </div>
  );
};

export default Home;
