import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      py="30px"
      bgcolor="#324629"
      sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
    >
      <Logo />
      <Typography color="#fff" fontWeight="700">
        Developed by Vlad Shulzhenko
      </Typography>
    </Box>
  );
};

export default Footer;
