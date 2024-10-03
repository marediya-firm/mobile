import axios from 'axios';
import {daysOfWeek, monthsOfYear} from '../../../../constant';
import {ServerTime} from '../export';

export class HomeController {
  /**
   * Simulate fetching server time
   */
  static async fetchServerTime(): Promise<ServerTime> {
    try {
      const data = await axios.get('https://worldtimeapi.org/api/ip');
      return HomeController.formatTime(new Date(data?.data?.datetime));
    } catch (error) {
      console.error('Error fetching server time:', error);
      return {currentTime: 'N/A', currentDate: 'N/A'};
    }
  }

  static formatTime(date: Date = new Date()): ServerTime {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const currentTime = date.toLocaleTimeString('en-US', options);

    return {
      currentTime,
      currentDate: `${
        monthsOfYear[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} - ${
        daysOfWeek[date.getDay()]
      }`,
    };
  }
}
