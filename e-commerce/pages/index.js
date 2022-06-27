import React, { useState } from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import MainHomeBanner from '../components/Home/MainHomeBanner';
import FullLayout from '../components/layouts/FullLayout';
import RecommendationOverview from '../components/Home/RecommendationOverview';
import CategoryOverview from '../components/Home/CategoryOverView';

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Grid container spacing={8}>
        {/* 메인 홈 배너 */}
        <Grid item xs={12} lg={12}>
          <MainHomeBanner />
        </Grid>

        {/* 추천 */}
        <Grid item xs={12} lg={12}>
          <RecommendationOverview />
        </Grid>

        {/* 카테고리 */}
        <Grid item xs={12} lg={12}>
          <CategoryOverview />
        </Grid>

        {/* 자주 산 상품 */}
        {/* <Grid item xs={12} lg={12}>
          <OftenBoughtOverView />
        </Grid> */}
      </Grid>
    </>
  );
}
