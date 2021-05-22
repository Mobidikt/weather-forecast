import weatherImg01d from './assets/image/weather/01d.png';
import weatherImg01n from './assets/image/weather/01n.png';
import weatherImg02d from './assets/image/weather/02d.png';
import weatherImg02n from './assets/image/weather/02n.png';
import weatherImg03d from './assets/image/weather/03d.png';
import weatherImg03n from './assets/image/weather/03n.png';
import weatherImg04d from './assets/image/weather/04d.png';
import weatherImg04n from './assets/image/weather/04n.png';
import weatherImg09d from './assets/image/weather/09d.png';
import weatherImg09n from './assets/image/weather/09n.png';
import weatherImg10d from './assets/image/weather/10d.png';
import weatherImg10n from './assets/image/weather/10n.png';
import weatherImg11d from './assets/image/weather/11d.png';
import weatherImg11n from './assets/image/weather/11n.png';
import weatherImg13d from './assets/image/weather/13d.png';
import weatherImg13n from './assets/image/weather/13n.png';
import weatherImg50d from './assets/image/weather/50d.png';
import weatherImg50n from './assets/image/weather/50n.png';

export type CityType = {
  name: string;
  longitude: number;
  latitude: number;
};

export const list_cities: CityType[] = [
  {
    name: 'Samara',
    longitude: 53.195873,
    latitude: 50.100193,
  },
  {
    name: 'Tolyatti',
    longitude: 53.507836,
    latitude: 49.420393,
  },
  {
    name: 'Saratov',
    longitude: 51.533557,
    latitude: 46.034257,
  },
  {
    name: 'Kazan',
    longitude: 55.796127,
    latitude: 49.106405,
  },
  {
    name: 'Krasnodar',
    longitude: 45.03547,
    latitude: 38.975313,
  },
];

export const name_month: string[] = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

export const WEATHER_API: { URL: string; KEY: string } = {
  URL: 'https://api.openweathermap.org/data/2.5/onecall',
  KEY: 'e47b2d1df3cceb30e95d426a05ac5fb4',
};

export const HOUR_HISTORICAL_WEATHER = 12; // час по которому выводить данные о погоде за определенную дату

export const IMG_WEATHER = {
  '01d': weatherImg01d,
  '01n': weatherImg01n,
  '02d': weatherImg02d,
  '02n': weatherImg02n,
  '03d': weatherImg03d,
  '03n': weatherImg03n,
  '04d': weatherImg04d,
  '04n': weatherImg04n,
  '09d': weatherImg09d,
  '09n': weatherImg09n,
  '10d': weatherImg10d,
  '10n': weatherImg10n,
  '11d': weatherImg11d,
  '11n': weatherImg11n,
  '13d': weatherImg13d,
  '13n': weatherImg13n,
  '50d': weatherImg50d,
  '50n': weatherImg50n,
};
