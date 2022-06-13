import React from 'react';
import {
  Box,
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

type Props = {
  pageQty: number,
  pageNumber: number,
  setPageNumber: (value: number) => void,
}

const HomePagination = ({ pageQty, pageNumber, setPageNumber }: Props) => {
  return (
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
  );
};

export default HomePagination;
