import { name_month } from '../config';

export const addNullDate = (day: number) => {
  if (day < 10) {
    return `0${day}`;
  } else return `${day}`;
};

const formaMonth = (month: number) => {
  return name_month[month];
};

export const formatDateString = (date: number) => {
  const nowDate = new Date(date);
  return `${addNullDate(nowDate.getDate())}.${addNullDate(
    nowDate.getMonth() + 1,
  )}.${nowDate.getFullYear()} `;
};

export const formatFullDate = (date: number) => {
  const newDate = new Date(date * 1000);
  var month = newDate.getUTCMonth();
  var day = newDate.getUTCDate();
  var year = newDate.getUTCFullYear();
  return `${addNullDate(day)} ${formaMonth(month)} ${year}`;
};
