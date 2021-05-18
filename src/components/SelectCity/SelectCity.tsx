import React from 'react';
import { list_cities } from '../../config';
import './SelectCity.scss';

type SelectCityType = {
  currentCity: number;
  handleCityChange: (e: any) => void;
};

const SelectCity: React.FC<SelectCityType> = ({
  currentCity,
  handleCityChange,
}) => {
  return (
    <select
      className='select-city'
      onChange={handleCityChange}
      value={currentCity}>
      <option value={-1} hidden>
        Select city
      </option>
      {list_cities.map((city, i) => (
        <option key={city.name} value={i}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCity;
