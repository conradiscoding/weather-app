import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';
import { getCurrentWeather } from '../../api/WeatherAPI';
import type { WeatherResponse } from '../../types/WeatherResponse';
import { useSelector, useDispatch } from 'react-redux';
import { setWeather } from '../../store/slices/weatherDataSlice';
import type { RootState, AppDispatch } from '../../store/store';

const SearchBar = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const weatherData = useSelector((state: RootState) => state.weather.data);

  useEffect(() => {
    console.log('Weather Data Updated:', weatherData);
  }, [weatherData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(event.target.value);
  };

  const handleSearch = async () => {
    // prevent empty queries
    const city = searchLocation.trim();
    if (!city) return;

    try {
      const data: WeatherResponse = await getCurrentWeather(city);
      console.log('Weather Data:', data);
      // update redux store with results
      dispatch(setWeather(data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

    console.log('Searching for:', city);
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
