import React from 'react';
import imgPlaceholder from '../../assets/image/placeholder-img.png';
import './PlaceholderForecast.scss';

const PlaceholderForecast: React.FC = () => (
  <div className="placeholder">
    <img className="placeholder__img" src={imgPlaceholder} alt="Weather" />
    <p className="placeholder__text">Fill in all the fields and the weather will be displayed</p>
  </div>
);

export default PlaceholderForecast;
