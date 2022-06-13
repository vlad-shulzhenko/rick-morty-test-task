import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <Box p="15px 0 15px 30px">
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
      >
        Go back
      </Button>
    </Box>
  );
};

export default GoBack;
