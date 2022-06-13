import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'components/Logo';
import { useCharacterContext } from 'contexts/CharacterContext';
import FacebookLogin from 'react-facebook-login';

const Header = () => {
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
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      py="30px"
      bgcolor="#324629"
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
          <Button
            sx={{
              color: '#fff',
              borderColor: '#4267b2',
              backgroundColor: '#4267b2',
              padding: '5px 10px',
              fontSize: 'calc(.27548vw + 12.71074px)',
              fontWeight: '700',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
            variant="outlined"
            onClick={() => setAuthUser(false)}
          >
            Log out
          </Button>
        </Box>
      ) : (
        <FacebookLogin
          appId="1132204827392868"
          autoLoad
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="Log in with facebook"
          buttonStyle={{
            borderRadius: '8px',
            backgroundColor: '#4267b2',
            padding: '15px 10px',
          }}
        />
      )}
    </Box>
  );
};

export default Header;
