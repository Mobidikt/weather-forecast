export type WeatherDayApiType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number; night: number; eve: number; morn: number };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: string;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
    uvi: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type WeatherCurrentApiType = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};

export type WeatherHourlyApiType = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};

export type WeatherWeakApiType = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherCurrentApiType;
  daily: WeatherDayApiType[];
  hourly: WeatherHourlyApiType;
  minutely: { dt: number; precipitation: number }[];
};

export type WeatherHistoricalApiType = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherCurrentApiType;
  hourly: WeatherHourlyApiType;
};
