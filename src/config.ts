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

export const WEATHER_API: { URL: string; KEY: string } = {
  URL: 'https://api.openweathermap.org/data/2.5/onecall?',
  KEY: 'e47b2d1df3cceb30e95d426a05ac5fb4',
};
