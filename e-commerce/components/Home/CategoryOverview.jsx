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
      <>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item> */}
        <Card>
          <CardMedia
            component='img'
            sx={{
              height: '200px',
            }}
            image='https://i.pinimg.com/736x/d1/75/3e/d1753e6efe65241126e971a0be9117cd.jpg'
          />
          <CardContent>1</CardContent>
        </Card>
        {/* </Grid> */}

        {/* <Grid item xs={6} md={4} lg={2}>
            <Card>
              <CardMedia
                component='img'
                sx={{
                  height: '200px',
                }}
                image='https://i.pinimg.com/564x/ea/f2/a8/eaf2a8495b377f4980d0b530fb32f4ad.jpg'
              />
              <CardContent>2</CardContent>
            </Card>
          </Grid> */}

        {/* <Grid item xs={6} md={4} lg={2}>
            <Card>
              <CardMedia
                component='img'
                sx={{
                  height: '200px',
                }}
                image='https://i.pinimg.com/564x/25/16/b2/2516b2b8995c5eb686986e7d25d04cb7.jpg'
              />
              <CardContent>3</CardContent>
            </Card>
          </Grid> */}

        {/* <Grid item xs={6} md={4} lg={2}>
            <Card>
              <CardMedia
                component='img'
                sx={{
                  height: '200px',
                }}
                image='https://i.pinimg.com/564x/9f/00/45/9f00453d4220b78f7fb4bb8b0cbe3b96.jpg'
              />
              <CardContent>4</CardContent>
            </Card>
          </Grid> */}

        {/* <Grid item xs={6} md={4} lg={2}>
            <Card>
              <CardMedia
                component='img'
                sx={{
                  height: '200px',
                }}
                image='https://i.pinimg.com/564x/e3/17/cc/e317ccbcf837cb28a049b81e8a809329.jpg'
              />
              <CardContent>5</CardContent>
            </Card>
          </Grid> */}

        {/* <Grid item xs={6} md={4} lg={2}>
            <Card>
              <CardMedia
                component='img'
                sx={{
                  height: '200px',
                }}
                image='https://i.pinimg.com/564x/20/5b/88/205b88cc74d4a128729e3b4e1f750afa.jpg'
              />
              <CardContent>6</CardContent>
            </Card>
          </Grid> */}
        {/* </Grid> */}
      </>
    </Box>
  );
};

export default CategoryOverview;
