import React from 'react';
import { Box, Typography } from '@mui/material';
import GoBack from 'components/GoBack';
import { useCharacterContext } from 'contexts/CharacterContext';

const About = () => {
  const { selectedCharacter } = useCharacterContext();

  return (
    <>
      <GoBack />
      <Box display="flex" justifyContent="center" alignItems="center">
        {selectedCharacter.id ? (
          <Box maxWidth="300px" sx={{ py: '30px', margin: '0 auto' }}>
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
        ) : (
          <Typography
            fontSize="20px"
            fontWeight="700"
            position="absolute"
            top="45%"
            left="35%"
          >
            First, you should select a character to get info about it
          </Typography>
        )}
      </Box>
    </>
  );
};

export default About;
