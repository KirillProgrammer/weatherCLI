#!/usr/bin/env node

import { getArgs } from "./helpers/arg.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
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

const initCLI = () => {
  const args = getArgs(process.argv);
  if(args.h) {
    // help
    printHelp();
  }
  if(args.s) {
    // save city
  }
  if (args.t) {
    // save token
    return saveToken(args.t)
  }
  // show weather
  getWeather('moscow');
}

initCLI();
