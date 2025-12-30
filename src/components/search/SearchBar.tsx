import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    //get weather data from api with location
    //update redux store with results
    console.log('Searching for:', searchLocation);
  };

  return (
    <div className={styles.container}>
      <div>Search Location Weather</div>
      <div className={styles.input}>
        <div>
          <input
            value={searchLocation}
            onChange={handleInputChange}
            type="text"
            placeholder="Search..."
          />
        </div>
        <div>
          <button className={styles.button} onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
