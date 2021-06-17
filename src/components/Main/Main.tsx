import React from 'react';
import { CurrentDateContextProvider } from '../../states/CurrentDateState/CurrentDateContext';
import ForecastDay from '../ForecastDay/ForecastDay';
import ForecastWeek from '../ForecastWeek/ForecastWeek';
import './Main.scss';

const Main: React.FC = () => (
  <main className="main">
    <ForecastWeek />
    <CurrentDateContextProvider>
      <ForecastDay />
    </CurrentDateContextProvider>
  </main>
);

export default Main;
