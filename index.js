/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
axios.defaults.baseURL =
  Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:3000';
AppRegistry.registerComponent(appName, () => App);
