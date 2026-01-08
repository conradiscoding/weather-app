import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';
import { getCurrentWeather } from '../../api/WeatherAPI';
import type { WeatherResponse } from '../../types/WeatherResponse';

const SearchBar = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    console.log('Weather Data Updated:', weatherData);
  }, [weatherData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(event.target.value);
  };

  const handleSearch = async () => {
    // Implement search logic here
    //get weather data from api with location
    try {
      const data: WeatherResponse = await getCurrentWeather(searchLocation);
      console.log('Weather Data:', data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
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
