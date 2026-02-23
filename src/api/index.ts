/**
 * Node modules
 */

import axios from 'axios';

export const openWeatherApi = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
});
