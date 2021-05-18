import React, { useCallback, useEffect, useState } from 'react';
import imgPlaceholder from '../../assets/image/placeholder-img.png';
import SelectCity from '../SelectCity/SelectCity';
import { list_cities } from '../../config';
import api from '../../utils/WeatherApi';
import './ForecastWeek.css';
import Slider from '../Slider/Slider';

const ForecastWeek: React.FC = () => {
  const [indexCity, setIndexCity] = useState<number>(-1);
  // const [isloading, setIsloading] = useState<boolean>(false); // Отображение загрузки данных
  const [forecastWeek, setForecastWeek] = useState<any[]>([]);

  useEffect(() => {
    if (indexCity >= 0) {
      // setIsloading(true); // Отображение загрузки данных
      api
        .getForecastWeek(list_cities[indexCity])
        .then((res) => {
          console.log(res.daily);
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

  const handleCityChange = useCallback((e: any) => {
    setIndexCity(e.target.value);
  }, []);
  return (
    <div className='forecast-week'>
      <h2 className='forecast-week__title'>7 Days Forecast</h2>
      <div className='forecast-week__menu'>
        <SelectCity
          currentCity={indexCity}
          handleCityChange={handleCityChange}
        />
      </div>
      {forecastWeek.length > 0 ? (
        <Slider forecastWeek={forecastWeek} />
      ) : (
        <div className='placeholder'>
          <img
            className='placeholder__img'
            src={imgPlaceholder}
            alt='Weather'
          />
          <p className='placeholder__text'>
            Fill in all the fields and the weather will be displayed
          </p>
        </div>
      )}
    </div>
  );
};

export default ForecastWeek;
