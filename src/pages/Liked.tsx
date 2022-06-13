import React from 'react';
import { Box, Typography } from '@mui/material';
import { useCharacterContext } from 'contexts/CharacterContext';
import { CharacterItem } from 'types/shared';
import CharacterCard from 'components/CharacterCard';
import GoBack from 'components/GoBack';

const Liked = () => {
  const { likedCharacters } = useCharacterContext();
  return (
    <Box>
      <GoBack />
      {likedCharacters.length > 0 ? (
        <Box
          p="30px"
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 300px))',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {likedCharacters.map((character: CharacterItem) => (
            <Box key={character.id}>
              <CharacterCard character={character} />
            </Box>
          ))}
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
  );
};

export default Liked;
