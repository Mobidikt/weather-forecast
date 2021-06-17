import React, { useCallback, useEffect, useState } from 'react';
import SelectCity from '../SelectCity/SelectCity';
import { LIST_CITIES } from '../../config';
import api from '../../utils/WeatherApi';
import './ForecastWeek.scss';
import Slider from '../Slider/Slider';
import PlaceholderForecast from '../PlaceholderForecast/PlaceholderForecast';
import { WeatherDayApiType, WeatherWeakApiType } from '../../utils/WeatherApiType';
import Loader from '../Loader/Loader';

const ForecastWeek: React.FC = () => {
  const [indexCity, setIndexCity] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [forecastWeek, setForecastWeek] = useState<WeatherDayApiType[] | null>(null);

  /**
   * Загружаем данны с сервера
   */
  useEffect(() => {
    if (indexCity >= 0) {
      setIsLoading(true); // Отображение загрузки данных
      api
        .getForecastWeek(LIST_CITIES[indexCity])
        .then((res: WeatherWeakApiType) => {
          setForecastWeek(res.daily);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false); // Отображение загрузки данных
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
    <section className="forecast-week">
      <h2 className="forecast-week__title">7 Days Forecast</h2>
      <div className="forecast-week__menu">
        <SelectCity prefixId="week" handleCityChange={handleCityChange} indexCity={indexCity} />
      </div>
      {isLoading ? <Loader /> : null}
      {forecastWeek && !isLoading ? <Slider forecastWeek={forecastWeek} /> : null}
      {!forecastWeek && !isLoading ? <PlaceholderForecast /> : null}
    </section>
  );
};

export default ForecastWeek;
