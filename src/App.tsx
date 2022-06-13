import React from 'react';
import Routes from 'router/Routes';
import { Box } from '@mui/material';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flex="1 0 auto">
        <Routes />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
