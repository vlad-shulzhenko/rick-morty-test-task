import React from 'react';
import { Box, Typography } from '@mui/material';
import { useCharacterContext } from '../../contexts/CharacterContext';

const AboutMain = () => {
  const { selectedCharacter } = useCharacterContext();

  return (
    <Box display="flex" flexGrow={1} maxWidth="300px" sx={{ py: '30px', margin: '0 auto' }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="10px">
        <Typography fontSize="20px" fontWeight="700">
          {selectedCharacter.name}
        </Typography>
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          style={{ borderRadius: '15px' }}
        />
        <Box
          width="100%"
          borderRadius="8px"
          bgcolor={
            selectedCharacter.status.toLowerCase() === 'alive' ? 'green' : 'red'
          }
        >
          <Typography textAlign="center" fontWeight="700" color="#fff">
            {selectedCharacter.status}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography>
            Species:&nbsp;
            {selectedCharacter.species}
          </Typography>
          <Typography>
            Gender:&nbsp;
            {selectedCharacter.gender}
          </Typography>
          <Typography>
            Location:&nbsp;
            {selectedCharacter.location.name}
          </Typography>
          <Typography>
            Created:&nbsp;
            {selectedCharacter.created}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMain;
