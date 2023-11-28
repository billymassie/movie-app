import React from 'react';
import './search.css';
import { useSearch } from '../context/SearchContext';

function Search() {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <div className='search'>
      <input
        value={searchValue}
        type='text'
        placeholder='Search'
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <ion-icon name='search-outline'></ion-icon>
    </div>
  );
}

export default Search;
