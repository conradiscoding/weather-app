import React from 'react';
import styles from './WeatherHeader.module.css';

interface WeatherHeaderProps {
  location: string;
  date: string;
}

const WeatherHeader = ({ location, date }: WeatherHeaderProps) => {
  return (
    // style for columns location on left and date on right
    <div className={styles.headerRow}>
      <p>{location}</p>
      <p>{date}</p>
    </div>
  );
};

export default WeatherHeader;
