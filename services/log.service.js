import chalk from 'chalk';

const printError = (error) => {
  console.log(chalk.bgRed("ERROR  " + error));
}

const printSuccess = (success) => {
  console.log(chalk.bgGreen("SUCCESS " + success));
}

const printHelp = () => {
  console.log(
    `${chalk.bgYellow('HELP')}

    Without arguments - saw weather
    -s [CITY] - set city
    -h for help information
    -t [API_KEY] - for saving token`);
}

export { printError, printSuccess, printHelp };