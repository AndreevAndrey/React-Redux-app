import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired
};

const Search = ({ inputValue, changeInputValue }) => (
  <TextField
    type='text'
    value={inputValue}
    onChange={changeInputValue}
    placeholder='Search…'
    InputProps={{
      startAdornment: (
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      )
    }}
  />
);

Search.propTypes = propTypes;
export default Search;
