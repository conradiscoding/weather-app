import React, { use } from 'react';
import WeatherIcon from '../../icon/WeatherIcon';
import type { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import styles from './ForecastCard.module.css';

const ForecastCard = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  return (
    <>
      {weatherData ? (
        <div className={styles.forecastContainer}>
          {weatherData.forecast.forecastday.map((day, key) => (
            <div key={key} className={styles.forecastCard}>
              <div className={styles.date}>
                <p>{day.date}</p>
              </div>
              <div className={styles.icon}>
                <WeatherIcon
                  icon={weatherData.current.condition.icon}
                  altText={weatherData.current.condition.text}
                />
              </div>
              <div className={styles.temperature}>
                <p>{day.day.maxtemp_f} °F</p>
                <p>{day.day.mintemp_f} °F</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ForecastCard;
