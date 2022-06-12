import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-scroll';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import background from 'img/header-background.jpg';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      id="header"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <HeaderNav />

      <Box display="flex" alignItems="flex-end" justifyContent="center" py="30px">
        <Link to="main" smooth duration={1000} style={{ cursor: 'pointer' }}>
          <ArrowCircleDownIcon sx={{ color: '#fff', fontSize: 70 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
