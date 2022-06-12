import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { useCharacterContext } from 'contexts/CharacterContext';
import FacebookLogin from 'react-facebook-login';

const HeaderNav = () => {
  const {
    user,
    setUser,
    authUser,
    setAuthUser,
  } = useCharacterContext();

  const responseFacebook = (response: any) => {
    setUser(response);
    setAuthUser(true);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      py="30px"
      bgcolor="#324629"
      sx={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}
    >
      <Logo />
      {authUser ? (
        <Box display="flex" alignItems="center" gap="15px">
          <Typography color="#fff" fontWeight="700">
            Hello,&nbsp;
            {user?.name}
          </Typography>
          <img
            src={user?.picture.data.url}
            width={user?.picture.data.width}
            height={user?.picture.data.height}
            alt="Profile"
            style={{ borderRadius: '50%' }}
          />
        </Box>
      ) : (
        <FacebookLogin
          appId="1132204827392868"
          autoLoad
          fields="name,email,picture"
          callback={responseFacebook}
        />
      )}
    </Box>
  );
};

export default HeaderNav;
