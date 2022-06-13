import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from 'components/Logo';

const Footer = () => {
  return (
    <Box
      component="footer"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      py="30px"
      bgcolor="#324629"
    >
      <Logo />
      <Typography color="#fff" fontWeight="700">
        Developed by Vlad Shulzhenko
      </Typography>
    </Box>
  );
};

export default Footer;
