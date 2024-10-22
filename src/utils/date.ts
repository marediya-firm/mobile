import { PunchSessions } from '../https/export';

export const timeHHMM = (date: string): string =>
  new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

const differenceMls = (startDateStr: string, endDateStr: string) => {
  // Convert the ISO 8601 date strings to Date objects
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Calculate the difference in milliseconds
  return endDate.getTime() - startDate.getTime();
};

export const findTotalMils = (punchSessions: PunchSessions[]) => {
  let diffMs = 0;

  for (let i = 0; i < punchSessions?.length; i++) {
    diffMs += differenceMls(
      punchSessions[i]?.punchIn,
      punchSessions[i]?.punchOut ?? new Date(),
    );
  }
  return findDifference(diffMs);
};

const findDifference = (diffMs: number) => {
  // Convert milliseconds to total seconds
  const diffSeconds = Math.floor(diffMs / 1000);

  // Calculate minutes, hours, and remaining seconds
  const diffMinutes = Math.floor(diffSeconds / 60);
  const remainingSeconds = diffSeconds % 60;

  const diffHours = Math.floor(diffMinutes / 60);
  const remainingMinutes = diffMinutes % 60;

  // Format hours, minutes, and seconds to always have 2 digits
  const formattedHours = String(diffHours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
