import React from 'react';
import Head from 'next/head';
import FullLayout from '../components/layouts/FullLayout';

import 'swiper/css';
import 'swiper/css/pagination';

// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>

      <>
        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      </>
    </>
  );
}

export default MyApp;
