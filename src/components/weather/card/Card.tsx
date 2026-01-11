import React, { useState } from 'react';
import styles from './Card.module.css';
import WeatherHeader from '../header/WeatherHeader';
import WeatherIcon from '../icon/WeatherIcon';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';

const Card = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);

  return (
    <>
      {weatherData ? (
        <div className={styles.cardContainer}>
          <WeatherHeader
            location={weatherData?.location.name}
            date={weatherData?.location.localtime}
          />
          <div className={styles.tempConditionContainer}>
            <div className={styles.temperature}>
              <p>{weatherData?.current.temp_f}</p>
            </div>
            <div className={styles.condition}>
              <p>{weatherData?.current.condition.text}</p>
            </div>
          </div>
          <div>
            <div className={styles.detailsRow}>
              <div className={styles.details}>
                <div>{weatherData.current.wind_mph}</div>
                <div> {weatherData.current.humidity}</div>
              </div>
              <div className={styles.icon}>
                <WeatherIcon condition="sunny" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Please search for location</div>
      )}
    </>
  );
};

export default Card;
