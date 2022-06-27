import React from 'react';
import { experimentalStyled, Container, Box } from '@mui/material';
import styled from 'styled-components';
import Header from './Header/Header';

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`;

const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 64px;
  width: 100%;
  padding: 20px 10px;
`;

const FullLayout = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <Header />

        <PageWrapper>
          <Container sx={{ paddingTop: '20px' }}>
            <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>{children}</Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </>
  );
};

export default FullLayout;
