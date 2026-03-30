import { useState } from 'react';
import type { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import styles from './Forecast.module.css';
import ForecastCard from '../forecastCard/ForecastCard';
import WeatherIcon from '../../icon/WeatherIcon';

const Forecast = () => {
  const [selectedForecast, setSelectedForecast] = useState<number>(0);
  const weatherData = useSelector((state: RootState) => state.weather.data);

  if (!weatherData) {
    return null;
  }

  const forecastDays = weatherData.forecast.forecastday.slice(1, 4);
  const selectedDay = forecastDays[selectedForecast] ?? forecastDays[0];

  return (
    <div className={styles.forecastContainer}>
      <div className={styles.forecastList}>
        {forecastDays.map((day, index) => (
          <button
            key={day.date}
            type="button"
            className={`${styles.forecastRow} ${
              selectedForecast === index ? styles.activeRow : ''
            }`}
            onClick={() => setSelectedForecast(index)}
          >
            <div className={styles.dayLabel}>{day.date}</div>
            <div className={styles.iconWrapper}>
              <WeatherIcon
                icon={day.day.condition.icon}
                altText={day.day.condition.text}
              />
            </div>
            <div className={styles.temps}>
              <span className={styles.highTemp}>
                {Math.round(day.day.maxtemp_f)}°
              </span>
              <span className={styles.lowTemp}>
                {Math.round(day.day.mintemp_f)}°
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className={styles.forecastCardWrapper}>
        {selectedDay && (
          <ForecastCard key={selectedForecast} forecastday={selectedDay} />
        )}
      </div>
    </div>
  );
};

export default Forecast;
