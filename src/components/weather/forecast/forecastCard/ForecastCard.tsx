import WeatherIcon from '../../icon/WeatherIcon';
import styles from './ForecastCard.module.css';

interface ForecastCardProps {
  forecastday?: {
    date: string;
    date_epoch: number;
    day: {
      maxtemp_c: number;
      maxtemp_f: number;
      mintemp_c: number;
      mintemp_f: number;
      avgtemp_c: number;
      avgtemp_f: number;
      maxwind_mph: number;
      maxwind_kph: number;
      totalprecip_mm: number;
      totalprecip_in: number;
      avgvis_km: number;
      avgvis_miles: number;
      avghumidity: number;
      daily_will_it_rain: number;
      daily_chance_of_rain: number;
      daily_will_it_snow: number;
      daily_chance_of_snow: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      uv: number;
    };
    astro: {
      sunrise: string;
      sunset: string;
      moonrise: string;
      moonset: string;
      moon_phase: string;
      moon_illumination: string;
    };
    hour: Array<{
      time_epoch: number;
      time: string;
      temp_c: number;
      temp_f: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      wind_mph: number;
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      precip_in: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      feelslike_f: number;
      windchill_c: number;
      windchill_f: number;
      heatindex_c: number;
      heatindex_f: number;
      dewpoint_c: number;
      dewpoint_f: number;
      will_it_rain: number;
      chance_of_rain: number;
      will_it_snow: number;
      chance_of_snow: number;
      vis_km: number;
      vis_miles: number;
      gust_mph: number;
      gust_kph: number;
      uv: number;
    }>;
  };
}

const ForecastCard = ({ forecastday }: ForecastCardProps) => {
  if (!forecastday) {
    return null;
  }

  return (
    <div className={styles.forecastCard}>
      <div className={styles.topRow}>
        <div>
          <div className={styles.date}>{forecastday.date}</div>
          <div className={styles.condition}>
            {forecastday.day.condition.text}
          </div>
        </div>
        <div className={styles.icon}>
          <WeatherIcon
            icon={forecastday.day.condition.icon}
            altText={forecastday.day.condition.text}
          />
        </div>
      </div>
      <div className={styles.temperature}>
        <div className={styles.tempItem}>
          <span>High</span>
          <strong>{Math.round(forecastday.day.maxtemp_f)}°F</strong>
        </div>
        <div className={styles.tempItem}>
          <span>Low</span>
          <strong>{Math.round(forecastday.day.mintemp_f)}°F</strong>
        </div>
      </div>
      <div className={styles.detailGrid}>
        <div className={styles.detailItem}>
          <span>Humidity</span>
          <strong>{forecastday.day.avghumidity}%</strong>
        </div>
        <div className={styles.detailItem}>
          <span>Wind</span>
          <strong>{forecastday.day.maxwind_mph} mph</strong>
        </div>
        <div className={styles.detailItem}>
          <span>Rain chance</span>
          <strong>{forecastday.day.daily_chance_of_rain}%</strong>
        </div>
        <div className={styles.detailItem}>
          <span>UV Index</span>
          <strong>{forecastday.day.uv}</strong>
        </div>
      </div>
      <div className={styles.astronomy}>
        <div>
          <span>Sunrise</span>
          <strong>{forecastday.astro.sunrise}</strong>
        </div>
        <div>
          <span>Sunset</span>
          <strong>{forecastday.astro.sunset}</strong>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
