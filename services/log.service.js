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

const printWeather = (weather) => {
  console.log(
    `Погода в городе ${weather.name}
На данный момент ${weather.description}, а скорость ветра ${weather.wind.speed}м/с
Температура ${Math.round(weather.main.temp - 273.15)} градусов по Цельсию, а чувствуется как ${Math.round(weather.main.feels_like - 273.15)} градусов`
  )
}

export { printError, printSuccess, printHelp, printWeather };
