import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { WeatherResponse } from '../../types/WeatherResponse';

interface WeatherState {
  data: WeatherResponse | null;
}

const initialState: WeatherState = {
  data: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<WeatherResponse | null>) {
      state.data = action.payload;
    },
    clearWeather(state) {
      state.data = null;
    },
  },
});

export const { setWeather, clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;

// Selectors
export const selectWeatherData = (state: { weather: WeatherState }) =>
  state.weather.data;
