import React, { useCallback, useState } from 'react';
import { LIST_CITIES } from '../../config';
import './SelectCity.scss';

type SelectCityType = {
  prefixId: string, // префикс id - чтоб лейбл не тригерил инпут тругого селектора
  indexCity: number,
  handleCityChange: (index: number) => void,
};

const SelectCity: React.FC<SelectCityType> = ({ prefixId, indexCity, handleCityChange }: SelectCityType) => {
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  /**
   * Показываем элементы селекта
   */
  const openOptions = useCallback(() => {
    setIsOpenOptions(true);
  }, []);

  /**
   * Выбираем Город
   */
  const selectOption = useCallback(
    (index: number) => {
      setIsOpenOptions(false);
      handleCityChange(index);
    },
    [handleCityChange],
  );

  return (
    <div
      role="listbox"
      tabIndex={0}
      className={`select-city ${indexCity < 0 ? 'select-city__default' : ''} ${
        isOpenOptions ? 'select-city_focus' : ''
      }`}
      onClick={openOptions}
      onMouseLeave={() => setIsOpenOptions(false)}
      onKeyDown={openOptions}
    >
      <span>{indexCity < 0 ? 'Select city' : LIST_CITIES[indexCity].name}</span>
      <div className={`options ${isOpenOptions ? '' : 'options_hidden'}`}>
        <div className="options__wrapper">
          {LIST_CITIES.map((city, i) => (
            <div className="option" key={city.name}>
              <input
                type="checkbox"
                className="select-city__option"
                value={i}
                id={`${prefixId}_${city.name}`}
                onChange={() => {
                  selectOption(i);
                }}
              />
              <label className="select-city__label" htmlFor={`${prefixId}_${city.name}`}>
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
