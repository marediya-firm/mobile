/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
axios.defaults.baseURL = 'http://10.0.2.2:8080';
AppRegistry.registerComponent(appName, () => App);
