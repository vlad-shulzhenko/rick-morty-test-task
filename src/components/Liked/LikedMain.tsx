import React from 'react';
import { Box } from '@mui/material';
import { CharacterItem } from '../../types/shared';
import CharacterCard from '../CharacterCard/CharacterCard';
import { useCharacterContext } from '../../contexts/CharacterContext';

const LikedMain = () => {
  const { likedCharacters } = useCharacterContext();
  return (
    <Box
      p="30px"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 300px))',
        justifyContent: 'center',
        gap: '30px',
        flexGrow: 1,
      }}
    >
      {likedCharacters.map((character: CharacterItem) => (
        <Box key={character.id}>
          <CharacterCard character={character} />
        </Box>
      ))}
    </Box>
  );
};

export default LikedMain;
