import React from 'react';
import { IMG_WEATHER } from '../../config';
import { formatFullDate } from '../../utils/formatDate';
import { formatDegress } from '../../utils/formatDegress';
import { WeatherDayApiType } from '../../utils/WeatherApiType';
import './CardSlider.scss';

type CardSliderType = {
  day: WeatherDayApiType,
};

const CardSlider: React.FC<CardSliderType> = ({ day }: CardSliderType) => (
  <div key={day.dt} className="card-slider">
    <p className="card-slider__date">{formatFullDate(day.dt)}</p>
    <img className="card-slider__img" src={IMG_WEATHER[day.weather[0].icon]} alt="weather" />
    <p className="card-slider__degree">{`${formatDegress(day.temp.day)}°`}</p>
  </div>
);

export default CardSlider;
