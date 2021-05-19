import React, { useCallback, useState } from 'react';
import { list_cities } from '../../config';
import PlaceholderForecast from '../PlaceholderForecast/PlaceholderForecast';
import SelectCity from '../SelectCity/SelectCity';
import './ForecastDay.css';

const ForecastDay: React.FC = () => {
  const [indexCity, setIndexCity] = useState<number>(-1);
  const [forecastDate, setForecastDate] = useState<string>('forecastDate');

  /**
   * Выбираем город
   */
  const handleCityChange = useCallback((index: number) => {
    setIndexCity(index);
  }, []);

  return (
    <div className='forecast-day'>
      <h2 className='forecast-day__title'>Forecast for a Date in the Past</h2>
      <div className='forecast-day__menu'>
        <SelectCity indexCity={indexCity} handleCityChange={handleCityChange} />
        <input
          className='input-forecast'
          type='date'
          id='start'
          name='forecast-date'
          value={forecastDate}
          placeholder='forecastDate'
          onChange={(event) => console.log(event.target.value)}
        />
      </div>
      {/* {currentCity ? (
        <div className='forecast-day__weather'>
          <p className='forecast-day__date'>Date</p>
          <p className='forecast-day__degree'>degrees</p>
        </div>
      ) : (
        <PlaceholderForecast />
      )}
    </div> */}
    </div>
  );
};

export default ForecastDay;
