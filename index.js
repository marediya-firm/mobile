/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

AppRegistry.registerComponent(appName, () => App);
//For Android:
//$ adb -s emulator-5554 reverse tcp:3000 tcp:3000
