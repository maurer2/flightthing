import Head from 'next/head';

import type { NextPage } from 'next';
// import Image from 'next/image'

const Home: NextPage = () => {
  const meow = 'Meow';

  return (
    <div className="">
      <Head>
        <title>Flightthting</title>
        <meta name="description" content="Flightthting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Header {meow}</header>

      <main className="">Main</main>

      <footer className="">Footer</footer>
    </div>
  );
};

export default Home;
