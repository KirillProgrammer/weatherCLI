import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import { printError } from './log.service.js';

const getWeather = async () => {
  const city = await getCity()
  // const url = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
  // if(city == undefined) {
  //   city = 'moscow'
  // }
  const token = await getToken()
  let x, y
  try {
    const { lat, lon } = await getGeo(city)
    x = lat
    y = lon
  } catch(err) {
      printError('Неверно указан токен или город')
      return
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: x,
      lon: y,
      appid: token,
      lang: 'ru',
      units: 'metrics'
  }})
  return data;
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

  return data[0]
}

const getToken = async () => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('No token');
  }
  return token;
}
const getCity = async () => {
  const city = await getKeyValue(TOKEN_DICTIONARY.city);
  if (!city) {
    throw new Error('No city');
  }
  return city;
}

export { getWeather };
