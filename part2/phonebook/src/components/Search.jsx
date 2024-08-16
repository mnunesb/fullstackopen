import React from 'react';

const Search = ({ searchValue, handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input value={searchValue} onChange={handleSearch} />
    </div>
  );
};

export default Search;