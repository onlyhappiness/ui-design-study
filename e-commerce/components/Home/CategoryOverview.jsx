import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const CategoryOverview = () => {
  return (
    <Box>
      <Typography variant='h6' sx={{ marginBottom: '15px' }}>
        Category
      </Typography>
      <Card>
        <div
          style={{
            position: 'relative',
          }}
        >
          <CardMedia
            style={{
              height: '250px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            }}
            component='img'
            image='https://i.pinimg.com/736x/01/6f/72/016f72c5812e1b8f71bdbf19d8c7558b.jpg'
          />

          <div
            style={{
              position: 'absolute',
              color: 'black',
              top: '50%',
              left: '50%',
            }}
          >
            Some text
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default CategoryOverview;
