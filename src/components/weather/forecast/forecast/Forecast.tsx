import React from 'react';
import type { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import styles from './Forecast.module.css';
import ForecastCard from '../forecastCard/ForecastCard';

const Forecast = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  return (
    <div className={styles.forecastContainer}>
      <div className={styles.forecastList}>
        {weatherData?.forecast.forecastday.map((day, key) => (
          <div key={key} className={styles.forecastRow}>
            <p className={styles.weatherText}>{day.date}</p>
            <p className={styles.weatherText}>{day.day.maxtemp_f} °F</p>
            <p className={styles.weatherText}>{day.day.mintemp_f} °F</p>
          </div>
        ))}
      </div>
      <div className={styles.forecastCardWrapper}>
        <ForecastCard />
      </div>
    </div>
  );
};

export default Forecast;
