import { NAME_MONTH } from '../config';

export const addNullDate = (day: number) => {
  if (day < 10) {
    return `0${day}`;
  }
  return `${day}`;
};

/**
 * Преобразование месяца в строковое описание
 * @param month номер месяца
 */
const formaMonth = (month: number) => NAME_MONTH[month];

/**
 * Преобразование даты в строку для отображения допустимого диапазона дат
 */
export const formatDateString = (date: number) => {
  const nowDate = new Date(date);
  return `${addNullDate(nowDate.getDate())}.${addNullDate(
    nowDate.getMonth() + 1,
  )}.${nowDate.getFullYear()} `;
};

/**
 * Преобразование даты полученной с сервера
 */
export const formatFullDate = (date: number) => {
  const newDate = new Date(date * 1000);
  const month = newDate.getUTCMonth();
  const day = newDate.getUTCDate();
  const year = newDate.getUTCFullYear();
  return `${addNullDate(day)} ${formaMonth(month)} ${year}`;
};
