import axiosClient from './axiosClient';

//add get weather method
function getCurrentWeather(city: string) {
  console.log('Fetching weather for city:', city);
  return axiosClient.get(
    `/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`
  );
}

export { getCurrentWeather };
