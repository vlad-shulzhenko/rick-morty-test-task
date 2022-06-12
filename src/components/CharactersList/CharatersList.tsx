import React from 'react';
import { Box } from '@mui/material';
import { CharacterItem } from 'types/shared';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import { useCharacterContext } from 'contexts/CharacterContext';

const CharactersList = () => {
  const { characters } = useCharacterContext();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 300px))',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      {characters.map((character: CharacterItem) => (
        <Box key={character.id}>
          <CharacterCard character={character} />
        </Box>
      ))}
    </Box>
  );
};

export default CharactersList;
