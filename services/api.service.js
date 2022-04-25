import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
  // const url = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
  const token = await getToken();
  const {lat,lon} = await getGeo(city);

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat,
      lon,
      appid: token,
      lang: 'ru',
      units: 'metrics'
  }})
  return data
}

const getGeo = async (city) => {
  // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
  const token = await getToken();
  const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: token
    }
  });
  const { lat, lon } = data[0];
  return {lat, lon};
}

const getToken = async () => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('No token');
  }
  return token;
}

export { getWeather };