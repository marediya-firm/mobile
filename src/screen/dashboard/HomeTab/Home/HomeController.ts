import axios from 'axios';
import {daysOfWeek, monthsOfYear} from '../../../../constant';
import {CalculateTime, ServerTime} from '../export';
import {HttpRequest} from '../../../../https/HttpsService';

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

  static async getPunchDetail(userId: string) {
    try {
      const response = await HttpRequest.clientGetRequest({
        endPoint: HttpRequest.apiEndPoint.getPunchByUser,
        payload: {userId},
      });
      console.log(':::::getPunchDetails:::::::::', response);
    } catch (error) {
      console.log(
        '🚀 ~ file: HomeController.ts:46 ~ HomeController ~ getPunchDetail ~ error:',
        error,
      );
    }
  }

  static calculateTotalHours(totalTime: CalculateTime[]): {
    [key: string]: number;
  } {
    let totalMilliseconds = 0;

    totalTime.forEach(log => {
      const punchIn = new Date(log.punchIn);
      const punchOut = new Date(log.punchOut ?? new Date());
      const timeDifference = punchOut.valueOf() - punchIn.valueOf(); // difference in milliseconds
      totalMilliseconds += timeDifference; // add each difference to totalMilliseconds
    });

    const totalSeconds = Math.floor(totalMilliseconds / 1000) % 60;
    const totalMinutes = Math.floor(totalMilliseconds / (1000 * 60)) % 60;
    const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));

    return {
      totalSeconds,
      totalMinutes,
      totalHours,
    };
  }
}
