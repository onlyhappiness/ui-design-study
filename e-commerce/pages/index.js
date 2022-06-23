import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/layouts/Header/Header';
import styles from '../styles/Home.module.css';
import { Grid } from '@mui/material';
import MainHomeBanner from '../components/Home/MainHomeBanner';

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
      {/* <Header click={click} setClick={setClick} /> */}

      {/* 메인 홈 배너 */}

      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <MainHomeBanner />
        </Grid>
      </Grid>

      {/* 추천 */}

      {/* 카테고리 */}

      {/* 자주 산 상품 */}
    </>
  );
}
