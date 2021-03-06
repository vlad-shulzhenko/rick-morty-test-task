import React, { useMemo } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { Box, Checkbox, Typography } from '@mui/material';
import { CharacterItem } from 'types/shared';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCharacterContext } from 'contexts/CharacterContext';

interface Props {
  character: CharacterItem;
}

const CharacterCard = ({ character }: Props) => {
  const { likedCharacters, setSelectedCharacter, toggleLikedCharacter } = useCharacterContext();
  const isLiked = useMemo(() => {
    return Boolean(likedCharacters.find((el) => el.id === character.id));
  }, [likedCharacters]);

  return (
    <Box
      border="1px solid #000"
      borderRadius="15px"
      width="min-content"
      position="relative"
      pb="10px"
    >
      <NavLink
        to="/about"
        style={{ textDecoration: 'none' }}
        onClick={() => setSelectedCharacter(character)}
      >
        <img
          src={character.image}
          alt={character.name}
          style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        />
        <Typography
          fontSize="16px"
          fontWeight="700"
          textAlign="center"
          color="#000"
        >
          {character.name}
        </Typography>
        <Box
          borderRadius="8px"
          width="30%"
          position="absolute"
          top="30px"
          left="200px"
          bgcolor={character.status.toLowerCase() === 'alive' ? 'green' : 'red'}
        >
          <Typography
            textAlign="center"
            fontSize="16px"
            fontWeight="700"
            color="#fff"
          >
            {character.status}
          </Typography>
        </Box>
      </NavLink>
      <Box position="absolute" bottom="1px" right="5px">
        <Checkbox
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon />}
          checked={isLiked}
          color="error"
          onClick={() => {
            toggleLikedCharacter(character);
          }}
        />
      </Box>
    </Box>
  );
};

export default CharacterCard;
