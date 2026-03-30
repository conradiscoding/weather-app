import styles from './Home.module.css';
import Card from '../components/weather/card/Card';
import SearchBar from '../components/search/SearchBar';
import Forecast from '../components/weather/forecast/forecast/Forecast';

const Home = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Weather App</h1>

      <SearchBar />
      <div className={styles.mainRow}>
        <Card />
        <Forecast />
      </div>
    </div>
  );
};

export default Home;
