import React, { useCallback, useState } from 'react';
import { list_cities } from '../../config';
import './SelectCity.scss';

type SelectCityType = {
  indexCity: number;
  handleCityChange: (index: number) => void;
};

const SelectCity: React.FC<SelectCityType> = ({
  indexCity,
  handleCityChange,
}) => {
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  /**
   * Показываем элементы селекта
   */
  const openOptions = () => {
    setIsOpenOptions(true);
  };

  /**
   * Выбираем Город
   */
  const selectOption = (index: number) => {
    setIsOpenOptions(false);
    handleCityChange(index);
  };

  return (
    <div
      className={`select-city ${indexCity < 0 ? 'select-city__default' : ''} ${
        isOpenOptions ? 'select-city_focus' : ''
      }`}
      onClick={openOptions}
      onMouseLeave={() => setIsOpenOptions(false)}>
      <span>{indexCity < 0 ? 'Select city' : list_cities[indexCity].name}</span>
      <div className={`options ${isOpenOptions ? '' : 'options_hidden'}`}>
        <div className='options__wrapper'>
          {list_cities.map((city, i) => (
            <div className='option' key={city.name}>
              <input
                type='checkbox'
                className='select-city__option'
                value={i}
                id={city.name}
                onChange={() => {
                  selectOption(i);
                }}
              />
              <label className='select-city__label' htmlFor={city.name}>
                {city.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCity;
