import React, { useCallback, useState } from 'react';
import { formatDegress } from '../../utils/formatDegress';
import './Slider.scss';

type SliderType = {
  forecastWeek: any[];
};

const Slider: React.FC<SliderType> = ({ forecastWeek }) => {
  const [translateX, settranslateX] = useState(0);

  const onSliderSwap = useCallback(
    (direction: string) => {
      if (direction === 'left') {
        if (translateX < 0) {
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
            <div key={day.dt} className='slider__item'>
              <p className='slider__date'>{day.dt}</p>
              <p className='slider__degree'>{formatDegress(day.temp.day)}°</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
