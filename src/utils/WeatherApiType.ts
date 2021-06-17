type WeatherApi = {
  id: number,
  main: string,
  description: string,
  icon:
    | '01n'
    | '01d'
    | '02n'
    | '02d'
    | '03d'
    | '03n'
    | '04n'
    | '04d'
    | '09d'
    | '09n'
    | '10n'
    | '10d'
    | '11n'
    | '11d'
    | '13n'
    | '13d'
    | '50n'
    | '50d',
};
export type WeatherDayApiType = {
  clouds: number,
  dew_point: number,
  dt: number,
  feels_like: { day: number, night: number, eve: number, morn: number },
  humidity: number,
  moon_phase: number,
  moonrise: number,
  moonset: number,
  pop: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  temp: {
    day: number,
    eve: number,
    max: number,
    min: number,
    morn: number,
    night: number,
    uvi: number,
  },
  weather: WeatherApi[],
  wind_deg: number,
  wind_gust: number,
  wind_speed: number,
};

export type WeatherCurrentApiType = {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  weather: WeatherApi[],
};

export type WeatherHourlyApiType = {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  clouds: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: WeatherApi[],
};

export type WeatherWeakApiType = {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current: WeatherCurrentApiType,
  daily: WeatherDayApiType[],
  hourly: WeatherHourlyApiType,
  minutely: { dt: number, precipitation: number }[],
};

export type WeatherHistoricalApiType = {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current: WeatherCurrentApiType,
  hourly: WeatherHourlyApiType[],
};
