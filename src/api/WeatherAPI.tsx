import type { WeatherResponse } from '../types/WeatherResponse';
import axiosClient from './axiosClient';

//add get weather method
async function getCurrentWeather(city: string): Promise<WeatherResponse> {
  const url = `/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`;
  const resp = await axiosClient.get<WeatherResponse>(url); // axiosClient returns response.data
  console.log(resp);
  return resp.data;
}
// async function getCurrentWeather(city: string): Promise<WeatherResponse> {
//   const res = await axiosClient.get<WeatherResponse>(
//     `/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`
//   );
//   return res.data;
// }

async function getForecastWeather(city: string): Promise<WeatherResponse> {
  const url = `/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=5`;
  const resp = await axiosClient.get<WeatherResponse>(url);
  return resp.data;
}

export { getCurrentWeather, getForecastWeather };
