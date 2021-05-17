import React from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';
import ForecastWeek from '../ForecastWeek/ForecastWeek';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className='main'>
      <ForecastWeek />
      <ForecastDay />
    </main>
  );
};

export default Main;
