const padZeroes = (num: number) => num.toString().padStart(2, "0");

export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const dayPeriod = hours >= 12 ? "PM" : "AM";

  return `${padZeroes(hours)}:${padZeroes(minutes)}:${padZeroes(
    seconds
  )} ${dayPeriod}`;
};

export const formatTimezoneOffset = (date: Date) => {
  const timezoneOffset = Math.floor(Math.abs(date.getTimezoneOffset()) / 60);

  return `GMT+${timezoneOffset}`;
};
