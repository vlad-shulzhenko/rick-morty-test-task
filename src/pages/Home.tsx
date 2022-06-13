import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Link } from 'react-scroll';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import background from 'img/header-background.jpg';
import { useCharacterContext } from 'contexts/CharacterContext';
import SearchInput from 'components/SearchInput';
import CharactersList from 'components/CharatersList';
import HomePagination from 'components/HomePagination';

const Home = () => {
  const {
    likedCharacters,
    characters,
    pageQty,
    pageNumber,
    setPageNumber,
  } = useCharacterContext();
  const navigate = useNavigate();

  return (
    <>
      <Box
        width="100%"
        minHeight="85vh"
        id="header"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        py="30px"
        zIndex={0}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Link to="main" smooth duration={1000} style={{ cursor: 'pointer' }}>
          <ArrowCircleDownIcon sx={{ color: '#fff', fontSize: 70 }} />
        </Link>
      </Box>
      <Box id="main" p="30px">
        <SearchInput />
        <Box py="15px">
          <Button
            variant="outlined"
            disabled={!likedCharacters.length}
            onClick={() => navigate('/liked')}
          >
            Liked characters
          </Button>
        </Box>
        <CharactersList characters={characters} />
        <HomePagination pageQty={pageQty} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </Box>
    </>
  );
};

export default Home;
