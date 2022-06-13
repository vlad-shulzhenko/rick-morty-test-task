import React from 'react';
import { Box } from '@mui/material';
import { CharacterItem } from 'types/shared';
import CharacterCard from 'components/CharacterCard';

type Props = {
  characters: CharacterItem[]
}

const CharactersList = ({ characters }: Props) => {
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
