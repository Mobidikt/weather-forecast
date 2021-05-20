import React, { useCallback, useEffect, useState } from 'react';
import SelectCity from '../SelectCity/SelectCity';
import { list_cities } from '../../config';
import api from '../../utils/WeatherApi';
import './ForecastWeek.scss';
import Slider from '../Slider/Slider';
import PlaceholderForecast from '../PlaceholderForecast/PlaceholderForecast';
import {
  WeatherDayApiType,
  WeatherWeakApiType,
} from '../../utils/WeatherApiType';

const ForecastWeek: React.FC = () => {
  const [indexCity, setIndexCity] = useState<number>(-1);
  // const [isloading, setIsloading] = useState<boolean>(false); // Отображение загрузки данных
  const [forecastWeek, setForecastWeek] =
    useState<WeatherDayApiType[] | null>(null);

  /**
   * Загружаем данны с сервера
   */
  useEffect(() => {
    if (indexCity >= 0) {
      // setIsloading(true); // Отображение загрузки данных
      api
        .getForecastWeek(list_cities[indexCity])
        .then((res: WeatherWeakApiType) => {
          setForecastWeek(res.daily);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // setIsloading(false); // Отображение загрузки данных
        });
    }
  }, [indexCity]);

  /**
   * Выбираем город
   */
  const handleCityChange = useCallback((index: number) => {
    setIndexCity(index);
  }, []);

  return (
    <div className='forecast-week'>
      <h2 className='forecast-week__title'>7 Days Forecast</h2>
      <div className='forecast-week__menu'>
        <SelectCity
          prefixId='week'
          handleCityChange={handleCityChange}
          indexCity={indexCity}
        />
      </div>
      {forecastWeek ? (
        <Slider forecastWeek={forecastWeek} />
      ) : (
        <PlaceholderForecast />
      )}
    </div>
  );
};

export default ForecastWeek;
