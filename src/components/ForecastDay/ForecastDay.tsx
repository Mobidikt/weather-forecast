import React from 'react';
import './ForecastDay.css';

const ForecastDay: React.FC = () => {
  return (
    <div className="forecast-day">
        <h2 className="forecast-day__title">Forecast for a Date in the Past</h2>
        <div className="forecast-day__menu"></div>
        <div className="forecast-day__weather">
            <p className="forecast-day__date">Date</p>
            <p className="forecast-day__degree">degrees</p>
        </div>
    </div>
  );
};

export default ForecastDay;