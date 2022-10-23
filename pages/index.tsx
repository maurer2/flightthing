import Head from 'next/head';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Canvas3D from '../src/components/Canvas3D/Canvas3D';
import { updateSensor } from '../src/store/actionCreators';

import type { NextPage } from 'next';
import type { MouseEvent, ReactElement } from 'react';
import type { Sensor, Store } from '../src/store/types';

// import Image from 'next/image'

// https://stackoverflow.com/questions/71144514/type-error-when-using-function-with-the-return-type-nextpage
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = (): ReactElement => {
  const sensor = useSelector<Store, Sensor>((state: Store) => state.sensor, shallowEqual);
  const dispatch = useDispatch();

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
    <div
      className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white text-black"
      data-testid="app"
    >
      <Head>
        <title>Flightthting</title>
        <meta name="description" content="Flightthting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="" data-testid="app-header">
        <h1 className="font-bold">Header</h1>
        <code>
          <pre>{JSON.stringify(sensor, null, 4)}</pre>
        </code>

        <button
          type="button"
          onClick={handleClick}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Update Sensor
        </button>
      </header>

      <main className="">
        <Canvas3D name="Canvas3D" />
      </main>

      <footer className="">Footer</footer>
    </div>
  );
};

export default Home;
