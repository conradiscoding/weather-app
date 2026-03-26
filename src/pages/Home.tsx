import React from 'react';
import styles from './Home.module.css';
import Card from '../components/weather/card/Card';
import SearchBar from '../components/search/SearchBar';
import ForecastCard from '../components/weather/forecast/forecastCard/ForecastCard';
import Forecast from '../components/weather/forecast/forecast/Forecast';

const Home = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Weather App</h1>

      <SearchBar />
      <Card />
      <Forecast />
      <ForecastCard />
    </div>
  );
};

export default Home;
