import React, { useEffect, useState } from 'react';
import imgPlaceholder from '../../assets/image/Academy-Weather-bg160.svg';
import { list_cities } from '../../config';
import api from '../../utils/WeatherApi';
import './ForecastWeek.css';

const ForecastWeek: React.FC = () => {
  const [currentCity, setCurrentCity] = useState<string>('');
  const [forecast, setForecast] = useState([])
  useEffect(()=>{
    api.getForecastWeek({
            name: 'Самара',
            longitude: 53.195873,
            latitude: 50.100193,
    }).then((res) => {
        console.log(res)
        // setForecast()
    }).catch((err) => {
        console.log(err)
    })
},[])
console.log()
  return (
    <div className="forecast-week">
        <h2 className="forecast-week__title">7 Days Forecast</h2>
        <div className="forecast-week__menu">
            <input
                className="input-forecast"
                placeholder="Select city"
                value={currentCity}
                list="cities"
                id="answerInput"
                onChange={(e)=>{setCurrentCity(e.target.value)}}
            />
            <datalist className="list-cities" id="cities">
                {list_cities.map((city) => (
                    <option key={city.name} value={city.name} data-value={city}/>
                ))}
            </datalist>
        </div>
        {currentCity ? 
        <div className="forecast-week__weather">
            <p className="forecast-week__date">Date</p>
            <p className="forecast-week__degree">degrees</p>
        </div>
        : <div className="placeholder">
            <img className="placeholder__img" src={imgPlaceholder} alt="Weather" />
            <p className="placeholder__text">Fill in all the fields and the weather will be displayed</p>
        </div>
        }
    </div>
  );
};

export default ForecastWeek;