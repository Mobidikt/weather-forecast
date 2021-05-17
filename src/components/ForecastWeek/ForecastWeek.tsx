import React, { useCallback, useEffect, useState } from 'react';
import imgPlaceholder from '../../assets/image/Academy-Weather-bg160.svg';
import SelectCity from '../SelectCity/SelectCity';
import { list_cities } from '../../config';
import api from '../../utils/WeatherApi';
import ArrowRight from '../../assets/image/icons/arrow-right.png';
import ArrowLeft from '../../assets/image/icons/arrow-left.png';
import './ForecastWeek.css';

const ForecastWeek: React.FC = () => {
  const [currentCity, setCurrentCity] = useState<string>('Samara');
  const [translateX, settranslateX] = useState(0);
  // const [isloading, setIsloading] = useState<boolean>(false); // Отображение загрузки данных
  const [forecastWeek, setForecastWeek] = useState<any[]>([
    {
      dt: 1621238400,

      temp: { day: 31.48, min: 19.36, max: 32.39, night: 25.11, eve: 27.99 },
    },
    {
      dt: 1621324800,

      temp: { day: 31.95, min: 19.44, max: 32.77, night: 24.55, eve: 31.3 },
    },
    {
      dt: 1621411200,

      temp: { day: 30.08, min: 19.38, max: 30.9, night: 19.78, eve: 22.59 },
    },
    {
      dt: 1621497600,

      temp: { day: 25.84, min: 16.42, max: 25.84, night: 16.42, eve: 17.95 },
    },
    {
      dt: 1621584000,

      temp: { day: 24.44, min: 14.7, max: 25.54, night: 19.51, eve: 23.76 },
    },
  ]);

  // useEffect(() => {
  //   const city = list_cities.find((city) => city.name === currentCity);
  //   if (city) {
  //     // setIsloading(true); // Отображение загрузки данных
  //     api
  //       .getForecastWeek(city)
  //       .then((res) => {
  //         console.log(res.daily);
  //         setForecastWeek(res.daily);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         // setIsloading(false); // Отображение загрузки данных
  //       });
  //   }
  // }, [currentCity]);
  const onSliderSwap = useCallback(
    (direction: string) => {
      if (direction === 'left') {
        if (translateX < -368) {
          settranslateX((prev) => prev + 552);
        } else settranslateX((prev) => prev + 368);
      }
      if (direction === 'right') {
        if (translateX > -552) {
          console.log(translateX > -552, translateX);
          settranslateX((prev) => prev - 552);
        } else settranslateX((prev) => prev - 368);
      }
    },
    [translateX],
  );
  const handleCityChange = (e: any) => {
    setCurrentCity(e.target.value);
  };
  return (
    <div className='forecast-week'>
      <h2 className='forecast-week__title'>7 Days Forecast</h2>
      <div className='forecast-week__menu'>
        <SelectCity
          currentCity={currentCity}
          handleCityChange={handleCityChange}
        />
      </div>
      {currentCity ? (
        <div className='slider'>
          <button
            disabled={translateX >= 0}
            className={`slider__btn slider__btn_left ${
              translateX === 0 ? 'slider__btn_disable' : ''
            }`}
            type='button'
            onClick={() => {
              onSliderSwap('left');
            }}
          />

          <button
            disabled={translateX === -920}
            className={`slider__btn slider__btn_right ${
              translateX <= -920 ? 'slider__btn_disable' : ''
            }`}
            type='button'
            onClick={() => {
              onSliderSwap('right');
            }}
          />
          <div className='slider__wrapper'>
            <ul
              className='forecast-week__list'
              style={{ transform: `translateX(${translateX}px)` }}>
              {forecastWeek.map((day) => (
                <div key={day.dt} className='forecast-week__item'>
                  <p className='forecast-week__date'>Date</p>
                  <p className='forecast-week__degree'>degrees</p>
                </div>
              ))}
            </ul>
          </div>
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

export default ForecastWeek;
