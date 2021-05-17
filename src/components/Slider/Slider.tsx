import React, { useCallback, useState } from 'react';
import './Slider.css';

type SliderType = {
  forecastWeek: any[];
};

const Slider: React.FC<SliderType> = ({ forecastWeek }) => {
  const [translateX, settranslateX] = useState(0);

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
              <p className='slider__date'>Date</p>
              <p className='slider__degree'>degrees</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
