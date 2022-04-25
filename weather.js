#!/usr/bin/env node

import { getArgs } from "./helpers/arg.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

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
    saveKeyValue('token', args.t);
  }
  // show weather
}

initCLI();
