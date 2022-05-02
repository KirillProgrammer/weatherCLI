#!/usr/bin/env node

import { getArgs } from "./helpers/arg.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printError, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError('No token provided');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token saved successfully');
  } catch (err) {
    printError(err.message);
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('No city provided');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('City saved successfully');
  } catch (err) {
    printError(err.message);
  }
}

const getForecast = async () => {
  const weather = await getWeather();
  printWeather(weather);
}

const initCLI = () => {
  const args = getArgs(process.argv);
  if(args.h) {
    // help
    printHelp();
  }
  if(args.s) {
    return saveCity(args.s)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  getForecast();
 }

initCLI();
