import React, { useCallback, useEffect, useState } from 'react';
import { HOUR_HISTORICAL_WEATHER, list_cities } from '../../config';
import { formatFullDate } from '../../utils/formatDate';
import { formatDegress } from '../../utils/formatDegress';
import api from '../../utils/WeatherApi';
import {
  WeatherHistoricalApiType,
  WeatherHourlyApiType,
} from '../../utils/WeatherApiType';
import InputDate from '../InputDate/InputDate';
import PlaceholderForecast from '../PlaceholderForecast/PlaceholderForecast';
import SelectCity from '../SelectCity/SelectCity';
import './ForecastDay.scss';

const ForecastDay: React.FC = () => {
  const [indexCity, setIndexCity] = useState<number>(-1);
  const [forecastDay, setForecastDay] =
    useState<WeatherHourlyApiType | null>(null);
  const [dateForecast, setDateForecast] = useState<number | null>(null);

  /**
   * Выбираем дату
   */
  const handleForecastDateChange = (date: number | null) => {
    setDateForecast(date);
  };
  /**
   * Выбираем город
   */
  const handleCityChange = useCallback((index: number) => {
    setIndexCity(index);
  }, []);

  /**
   * Загружаем данны с сервера
   */
  useEffect(() => {
    if (indexCity >= 0 && dateForecast) {
      // setIsloading(true); // Отображение загрузки данных
      api
        .getForecastDay(list_cities[indexCity], dateForecast)
        .then((res: WeatherHistoricalApiType) => {
          setForecastDay(res.hourly[HOUR_HISTORICAL_WEATHER]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // setIsloading(false); // Отображение загрузки данных
        });
    } else setForecastDay(null);
  }, [dateForecast, indexCity]);

  return (
    <div className='forecast-day'>
      <h2 className='forecast-day__title'>Forecast for a Date in the Past</h2>
      <div className='forecast-day__menu'>
        <SelectCity
          prefixId='day'
          indexCity={indexCity}
          handleCityChange={handleCityChange}
        />
        <InputDate setForecastDate={handleForecastDateChange} />
      </div>
      {forecastDay ? (
        <div key={forecastDay.dt} className='forecast-day__card'>
          <p className='forecast-day__date'>{formatFullDate(forecastDay.dt)}</p>
          <img
            className='forecast-day__img'
            src={`/images/weather/${forecastDay.weather[0].icon}.png`}
            alt='weather'
          />
          <p className='forecast-day__degree'>
            {formatDegress(forecastDay.temp)}°
          </p>
        </div>
      ) : (
        <PlaceholderForecast />
      )}
    </div>
  );
};

export default ForecastDay;
