import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WeatherIcon from './components/weather-icon/WeatherIcon';

function App() {
  return (
    <>
      <WeatherIcon condition={'sunny'} />
    </>
  );
}

export default App;
