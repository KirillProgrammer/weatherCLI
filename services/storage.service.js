import { homedir } from 'os';
import path from 'path';

const filePath = path.join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {
  console.log(path.basename(filePath));
  console.log(path.dirname(filePath));
  console.log(path.extname(filePath));
  console.log(path.relative(filePath, path.dirname(filePath)));
  console.log(path.isAbsolute(filePath));
}

export { saveKeyValue };