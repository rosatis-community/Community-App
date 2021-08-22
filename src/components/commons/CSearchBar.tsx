import { styled } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { FC } from 'react';
import CPaper from './CPaper';

interface CSearchBarProps {
  term: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchIconRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1, 0, 2),
}));

const CSearchBar: FC<CSearchBarProps> = ({
  term,
  handleInputChange,
  placeholder,
}) => {
  return (
    <CPaper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <SearchIconRoot>
        <SearchIcon />
      </SearchIconRoot>
      <InputBase
        value={term}
        onChange={handleInputChange}
        placeholder={placeholder}
        sx={{ ml: 1, flex: 1 }}
      />
    </CPaper>
  );
};

CSearchBar.defaultProps = {
  placeholder: 'Search Community',
};

export default CSearchBar;
