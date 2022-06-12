import React from 'react';
import LikedMain from 'components/Liked/LikedMain';
import Footer from 'components/Footer/Footer';
import HeaderNav from 'components/Header/HeaderNav';
import { Box } from '@mui/material';

const Liked = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <HeaderNav />
      <LikedMain />
      <Footer />
    </Box>
  );
};

export default Liked;
