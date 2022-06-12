import React from 'react';
import AboutMain from 'components/About/AboutMain';
import HeaderNav from 'components/Header/HeaderNav';
import Footer from 'components/Footer/Footer';
import { Box } from '@mui/material';

const About = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <HeaderNav />
      <AboutMain />
      <Footer />
    </Box>
  );
};

export default About;
