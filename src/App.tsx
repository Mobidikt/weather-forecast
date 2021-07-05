import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './assets/fonts/fonts.css';
import './App.scss';
import Footer from './components/Footer/Footer';
import imgOffLine from './assets/image/icons/offLine.png';
import { list_cities } from './config';

function App() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  function success(position: any) {
    let isAdd: boolean = true;
    list_cities.forEach((city) => {
      if (
        city.latitude === position.coords.latitude &&
        city.longitude === position.coords.longitude
      )
        isAdd = false;
    });
    if (isAdd) {
      list_cities.push({
        name: 'Текущее местоположение',
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    }
  }

  function error() {
    console.log('Ошибка при определении положения');
  }
  window.navigator.geolocation.getCurrentPosition(success, error);

  window.addEventListener('load', function () {
    function updateOnlineStatus() {
      if (navigator.onLine) {
        setOnlineStatus(true);
      } else setOnlineStatus(false);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });
  window.navigator.registerProtocolHandler(
    'geo',
    'https://mobidikt.github.io/weather-forecast/data=%s',
    'Weather',
  );
  return (
    <div className='App'>
      {onlineStatus ? null : (
        <img className='offLine' src={imgOffLine} alt='offLine' />
      )}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
