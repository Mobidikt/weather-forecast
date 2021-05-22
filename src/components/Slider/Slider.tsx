import React, { useCallback, useState } from 'react';
import { WeatherDayApiType } from '../../utils/WeatherApiType';
import CardSlider from '../CardSlider/CardSlider';
import './Slider.scss';

type SliderType = {
  forecastWeek: WeatherDayApiType[];
};

const Slider: React.FC<SliderType> = ({ forecastWeek }) => {
  const [translateX, settranslateX] = useState(0);

  /**
   * Сдвигаем карточки слайдера
   */
  const onSliderSwap = useCallback(
    (direction: string) => {
      if (direction === 'left') {
        if (translateX < 183) {
          settranslateX((prev) => prev + 184);
        }
      }
      if (direction === 'right') {
        if (translateX > -920) {
          settranslateX((prev) => prev - 184);
        }
      }
    },
    [translateX],
  );

  return (
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
          className='slider__list'
          style={{ transform: `translateX(${translateX}px)` }}>
          {forecastWeek.map((day) => (
            <CardSlider day={day} key={day.dt} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
