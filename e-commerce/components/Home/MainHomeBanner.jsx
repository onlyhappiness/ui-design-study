import React from 'react';
import { Box, Card, CardMedia, Paper, Typography } from '@mui/material';

const MainHomeBanner = () => {
  return (
    <>
      <Card>
        <Box
          style={{
            position: 'relative',
            height: '50vh',
          }}
        >
          <CardMedia
            component='img'
            image='https://i.pinimg.com/564x/b5/93/1f/b5931f112201d1833dde27b5145a8249.jpg'
          />

          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Typography variant='h4'>E Commerce</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MainHomeBanner;
