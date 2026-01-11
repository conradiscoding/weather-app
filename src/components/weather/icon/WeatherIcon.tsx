import React from 'react';
import { WiCloud, WiDaySunny, WiDayRain, WiDaySnow } from 'react-icons/wi';
import styles from './WeatherIcon.module.css';

interface WeatherIconProps {
  icon: string | undefined;
  altText: string | undefined;
}

const WeatherIcon = ({ icon, altText }: WeatherIconProps) => {
  return (
    <div>
      <img src={icon} alt={altText}></img>
    </div>
  );
};

export default WeatherIcon;
