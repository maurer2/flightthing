import Head from 'next/head';

import Canvas3D from '../src/components/Canvas3D/Canvas3D';

import type { NextPage } from 'next';

// import Image from 'next/image'

// https://stackoverflow.com/questions/71144514/type-error-when-using-function-with-the-return-type-nextpage
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  const meow = 'Meow';

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
        <h1 className="font-bold">Header {meow}</h1>
      </header>

      <main className="">
        <Canvas3D name="Canvas3D" />
      </main>

      <footer className="">Footer</footer>
    </div>
  );
};

export default Home;
