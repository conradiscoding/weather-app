import React from 'react';
import { WiCloud, WiDaySunny, WiDayRain, WiDaySnow } from 'react-icons/wi';

interface WeatherIconProps {
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
}

const WeatherIcon = ({ condition }: WeatherIconProps) => {
  switch (condition) {
    case 'sunny':
      return <WiDaySunny />;
    case 'cloudy':
      return <WiCloud />;
    case 'rainy':
      return <WiDayRain />;
    case 'snowy':
      return <WiDaySnow />;
    default:
      return <div>Unknown Condition</div>;
  }
};

export default WeatherIcon;
