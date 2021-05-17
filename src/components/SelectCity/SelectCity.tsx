import React from 'react';
import { list_cities } from '../../config';
import './SelectCity.css';

type SelectCityType = {
  currentCity: string;
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
      <option value='' hidden>
        Select city
      </option>
      {list_cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCity;
