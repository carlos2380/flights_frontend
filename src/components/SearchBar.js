import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, searchFlight, resetSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search flight by ID"
      />
      <button onClick={searchFlight}>Search</button>
      <button onClick={() => {
        setSearchTerm('');
        resetSearch();
      }}>Reset</button>
    </div>
  );
};

export default SearchBar;