import React from 'react';
import { WiCloud, WiDaySunny, WiDayRain, WiDaySnow } from 'react-icons/wi';
import styles from './WeatherIcon.module.css';

interface WeatherIconProps {
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
}

const WeatherIcon = ({ condition }: WeatherIconProps) => {
  switch (condition) {
    case 'sunny':
      return <WiDaySunny className={styles.iconSize} />;
    case 'cloudy':
      return <WiCloud className={styles.iconSize} />;
    case 'rainy':
      return <WiDayRain className={styles.iconSize} />;
    case 'snowy':
      return <WiDaySnow className={styles.iconSize} />;
    default:
      return <div>Unknown Condition</div>;
  }
};

export default WeatherIcon;
