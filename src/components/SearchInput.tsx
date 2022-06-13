import React from 'react';
import {
  Box,
  TextField,
} from '@mui/material';
import { useCharacterContext } from 'contexts/CharacterContext';

const SearchInput = () => {
  const { query, setQuery } = useCharacterContext();
  return (
    <Box width="100%">
      <TextField
        id="search-input"
        label="Search for heroes by name"
        fullWidth
        autoComplete="off"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        sx={{ boxShadow: '1px 3px 9px rgba(128,128,128)', borderRadius: '8px' }}
      />
    </Box>
  );
};

export default SearchInput;
