export const calculateSpeed = (distance: number, time: number): number => {
  if (time <= 0) throw new Error('Time must be greater than zero.');
  return Math.round((distance / time) * 3.6) / 10;
};

export const formatTimeInMotion = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m ${remainingSeconds}s`;
};

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
