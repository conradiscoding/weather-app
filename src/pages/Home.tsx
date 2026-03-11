import React from 'react';
import styles from './Home.module.css';
import Card from '../components/weather/card/Card';
import SearchBar from '../components/search/SearchBar';

const Home = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Weather App</h1>

      <SearchBar />
      <Card />
    </div>
  );
};

export default Home;
