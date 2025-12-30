import React, { useState } from 'react';
import styles from './Card.module.css';
import WeatherHeader from '../header/WeatherHeader';
import WeatherIcon from '../icon/WeatherIcon';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <WeatherHeader location="New York" date="2024-06-15" />
      <div className={styles.tempConditionContainer}>
        <div className={styles.temperature}>
          <p>temparture</p>
        </div>
        <div className={styles.condition}>
          <p> weather condition</p>
        </div>
      </div>
      <div>
        <div className={styles.detailsRow}>
          <div className={styles.details}>
            <div> wind speed</div>
            <div> humidity</div>
          </div>
          <div className={styles.icon}>
            <WeatherIcon condition="sunny" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
