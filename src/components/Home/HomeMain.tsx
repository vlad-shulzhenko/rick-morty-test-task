import React from 'react';
import {
  Box,
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from '@mui/material';
import { Link as NavLink } from 'react-router-dom';
import SearchInput from 'components/SearchInput/SearchInput';
import CharactersList from 'components/CharactersList/CharatersList';
import { useCharacterContext } from 'contexts/CharacterContext';

const HomeMain = () => {
  const { pageQty, pageNumber, setPageNumber } = useCharacterContext();

  return (
    <Box id="main" minHeight="100vh" bgcolor="#fff" p="30px">
      <SearchInput />
      <Box py="15px">
        <NavLink
          to="/liked"
          style={{
            padding: '5px',
            textDecoration: 'none',
            fontWeight: '700',
            border: '1px solid #000',
            borderRadius: '8px',
            backgroundColor: '#c3c3c3',
          }}
        >
          Go to liked page
        </NavLink>
      </Box>
      <CharactersList />
      <Box display="flex" justifyContent="center" py="50px">
        <Pagination
          count={pageQty}
          shape="rounded"
          size="large"
          page={pageNumber}
          showFirstButton
          showLastButton
          onChange={(_, number) => setPageNumber(number)}
          renderItem={(item: PaginationRenderItemParams) => (
            <PaginationItem
              component={NavLink}
              to={`/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default HomeMain;
