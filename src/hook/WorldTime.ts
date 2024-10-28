import axios from 'axios';
import { useEffect, useState } from 'react';
import utils from '../constant/utc';
import { type WorldTimeProps } from './export';

export const WorldTime = (): [
  WorldTimeProps,
  React.Dispatch<React.SetStateAction<WorldTimeProps>>,
] => {
  const [serverTime, setServerTime] = useState<WorldTimeProps>({
    currentTime: '',
    currentDate: '',
  });
  useEffect(() => {
    // Simulate fetching server time (replace this with your API call if needed)
    const fetchServerTime = async () => {
      try {
        // Simulate server time fetch, replace with real API
        const data = await axios.get('https://worldtimeapi.org/api/ip');
        setServerTime(formatTime(new Date(data?.data?.datetime)));
      } catch (error) {
        setServerTime(formatTime(new Date()));
        console.error('Error fetching server time:', error);
      }
    };
    fetchServerTime();
  }, []);
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const currentTime = date.toLocaleTimeString('en-US', options);

    return {
      currentTime,
      currentDate: `${
        utils.monthsOfYear[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} - ${
        utils.daysOfWeek[date.getDay()]
      }`,
    };
  };

  return [serverTime, setServerTime];
};
