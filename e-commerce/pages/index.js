import React, { useState } from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import MainHomeBanner from '../components/Home/MainHomeBanner';

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
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
