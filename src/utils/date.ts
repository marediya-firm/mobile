export const timeHHMM = (date: string): string =>
  new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

export function timeDifferenceISO(
  startDateStr: string,
  endDateStr: string,
): string {
  // Convert the ISO 8601 date strings to Date objects
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Calculate the difference in milliseconds
  const diffMs = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to total minutes
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  // Calculate hours and remaining minutes
  const diffHours = Math.floor(diffMinutes / 60);
  const remainingMinutes = diffMinutes % 60;

  // Format hours and minutes to always have 2 digits
  const formattedHours = String(diffHours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}
