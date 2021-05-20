import React, { useCallback, useEffect, useState } from 'react';
import { list_cities } from '../../config';
import api from '../../utils/WeatherApi';
import InputDate from '../InputDate/InputDate';
import PlaceholderForecast from '../PlaceholderForecast/PlaceholderForecast';
import SelectCity from '../SelectCity/SelectCity';
import './ForecastDay.css';

const ForecastDay: React.FC = () => {
  const [indexCity, setIndexCity] = useState<number>(-1);
  const [forecastDay, setForecastDay] = useState<any>({});
  const [dateForecast, setDateForecast] = useState<number | null>(0);

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
        .then((res) => {
          console.log(res.current);
          setForecastDay(res.current);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // setIsloading(false); // Отображение загрузки данных
        });
    }
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
      {/* {currentCity ? (
        <div className='forecast-day__weather'>
          <p className='forecast-day__date'>Date</p>
          <p className='forecast-day__degree'>degrees</p>
        </div>
      ) : ( */}
      <PlaceholderForecast />
      {/* )} */}
    </div>
  );
};

export default ForecastDay;
