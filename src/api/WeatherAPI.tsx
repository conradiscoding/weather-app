import type { WeatherResponse } from '../types/WeatherResponse';
import axiosClient from './axiosClient';

//add get weather method
async function getCurrentWeather(city: string): Promise<WeatherResponse> {
  const url = `/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&q=${encodeURIComponent(city)}`;
  const resp = await axiosClient.get<WeatherResponse>(url); // axiosClient returns response.data
  console.log('API Response:', resp);
  return resp.data;
}

export { getCurrentWeather };
