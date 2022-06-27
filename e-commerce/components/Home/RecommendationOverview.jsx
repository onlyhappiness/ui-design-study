import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { recommend } from '../../data/dashboard';

const RecommendationOverview = () => {
  return (
    <Box>
      <Typography variant='h6'>Special Recommendation</Typography>

      {/* <Typography variant='body1'>View All</Typography> */}
      <>
        <Swiper
          modules={[Pagination]}
          style={{
            height: '100%',
            width: '100%',
            marginTop: '30px',
          }}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
        >
          {recommend.map((data, i) => {
            return (
              <SwiperSlide key={data.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia component='img' height='200' image={data.img} />
                    <CardContent sx={{ height: '50px' }}>
                      {data.content}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </Box>
  );
};

export default RecommendationOverview;
