import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WeatherIcon from './components/weather/icon/WeatherIcon';
import WeatherHeader from './components/weather/header/WeatherHeader';
import Card from './components/weather/card/Card';
import SearchBar from './components/search/SearchBar';

function App() {
  return (
    <>
      <SearchBar />
      <Card />
    </>
  );
}

export default App;
