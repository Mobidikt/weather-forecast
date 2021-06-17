import React, { useCallback, useEffect, useState } from 'react';
import { HOUR_HISTORICAL_WEATHER, IMG_WEATHER, LIST_CITIES } from '../../config';
import { formatFullDate } from '../../utils/formatDate';
import { formatDegress } from '../../utils/formatDegress';
import api from '../../utils/WeatherApi';
import { WeatherHistoricalApiType, WeatherHourlyApiType } from '../../utils/WeatherApiType';
import InputDate from '../InputDate/InputDate';
import PlaceholderForecast from '../PlaceholderForecast/PlaceholderForecast';
import SelectCity from '../SelectCity/SelectCity';
import { useCurrentDateContext } from '../../states/CurrentDateState/CurrentDateContext';
import './ForecastDay.scss';
import Loader from '../Loader/Loader';

const ForecastDay: React.FC = () => {
  const { dateUnixState } = useCurrentDateContext();
  const [indexCity, setIndexCity] = useState<number>(-1);
  const [forecastDay, setForecastDay] = useState<WeatherHourlyApiType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    if (indexCity >= 0 && dateUnixState) {
      setIsLoading(true); // Отображение загрузки данных
      api
        .getForecastDay(LIST_CITIES[indexCity], dateUnixState)
        .then((res: WeatherHistoricalApiType) => {
          setForecastDay(res.hourly[HOUR_HISTORICAL_WEATHER]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false); // Отображение загрузки данных
        });
    } else setForecastDay(null);
  }, [dateUnixState, indexCity]);

  return (
    <section className="forecast-day">
      <h2 className="forecast-day__title">Forecast for a Date in the Past</h2>
      <div className="forecast-day__menu">
        <SelectCity prefixId="day" indexCity={indexCity} handleCityChange={handleCityChange} />
        <InputDate />
      </div>
      {isLoading ? <Loader /> : null}
      {forecastDay && !isLoading ? (
        <div key={forecastDay.dt} className="forecast-day__card">
          <p className="forecast-day__date">{formatFullDate(forecastDay.dt)}</p>
          <img className="forecast-day__img" src={IMG_WEATHER[forecastDay.weather[0].icon]} alt="weather" />
          <p className="forecast-day__degree">{`${formatDegress(forecastDay.temp)}°`}</p>
        </div>
      ) : null}
      {!forecastDay && !isLoading ? <PlaceholderForecast /> : null}
    </section>
  );
};

export default ForecastDay;
