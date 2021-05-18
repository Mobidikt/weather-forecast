import React, { useState } from 'react';
import imgPlaceholder from '../../assets/image/placeholder-img.png';
import { list_cities } from '../../config';
import SelectCity from '../SelectCity/SelectCity';
import './ForecastDay.css';

const ForecastDay: React.FC = () => {
  const [currentCity, setCurrentCity] = useState<string>('');
  const [forecastDate, setForecastDate] = useState<string>('forecastDate');

  const handleCityChange = (e: any) => {
    setCurrentCity(e.target.value);
  };

  return (
    <div className='forecast-day'>
      <h2 className='forecast-day__title'>Forecast for a Date in the Past</h2>
      <div className='forecast-day__menu'>
        <SelectCity
          currentCity={currentCity}
          handleCityChange={handleCityChange}
        />
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
      {currentCity ? (
        <div className='forecast-day__weather'>
          <p className='forecast-day__date'>Date</p>
          <p className='forecast-day__degree'>degrees</p>
        </div>
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

export default ForecastDay;
