import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WeatherIcon from './components/weather/icon/WeatherIcon';
import WeatherHeader from './components/weather/header/WeatherHeader';

function App() {
  return (
    <>
      <WeatherHeader location={'New York'} date={'2024-06-15'} />
      <WeatherIcon condition={'sunny'} />
    </>
  );
}

export default App;
