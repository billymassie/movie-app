import { createContext, useState, useContext } from 'react';

const SearchBarContext = createContext();

export function useSearch() {
  return useContext(SearchBarContext);
}

export function SearchContext({ children }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SearchBarContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchBarContext.Provider>
  );
}
