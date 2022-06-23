import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ click }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        // minHeight: '100vh',
      }}
    >
      <AppBar
        sx={{
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // width: '100%',
          }}
        >
          {/* 로고 */}
          <Typography variant='h6'>E-commerce</Typography>
          {/* 카테고리 */}
          <Box
            sx={{
              display: 'flex',
              // justifyContent: '',
              // p: 2,
              alignItems: 'center',
            }}
          >
            <div style={{ padding: '10px' }}>카테고리1</div>
            <div style={{ padding: '10px' }}>카테고리2</div>
            <div style={{ padding: '10px' }}>카테고리3</div>
          </Box>

          {/* 버튼 및 아이콘 */}
          <IconButton
            size='large'
            color='inherit'
            onClick={() => {
              console.log('나와');
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
