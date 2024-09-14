import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import './App.css';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="app">
      <h1>Fast Finder Search Bar</h1>
      <SearchBar onSearch={handleSearch} />
      <CountryList country={selectedCountry} />
    </div>
  );
};

export default App;
