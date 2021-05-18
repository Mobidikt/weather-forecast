import { name_month } from '../config';

const formatDay = (day: number) => {
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

const formaMonth = (month: number) => {
  return name_month[month];
};

export const formatFullDate = (date: number) => {
  const newDate = new Date(date * 1000);
  var month = newDate.getUTCMonth();
  var day = newDate.getUTCDate();
  var year = newDate.getUTCFullYear();
  return `${formatDay(day)} ${formaMonth(month)} ${year}`;
};
