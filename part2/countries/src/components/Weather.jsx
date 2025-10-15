// Framework Imports
import { useState, useEffect } from 'react';

// Library Imports
import axios from 'axios';

// Service Imports
import weatherService from '../services/weather';

const Weather = ({ city, loc }) => {
  // State Declarations
  const [currWeather, setCurrWeather] = useState(null);

  // Const Declarations
  const baseImgUrl = 'https://openweathermap.org/img/wn/';

  // Onload Functions
  useEffect(() => {
    weatherService
      .getWeather(loc).then(initialWeather => {
        setCurrWeather(initialWeather)
      })
  }, []);
  
  return (
    <div className="weather">
      <h2>Weather in {city}</h2>
      {
        currWeather === null ? (
          <p>Loading weather...</p>
        ) : (
          <>
            <p>Temperature {Math.round(currWeather.main.temp)} Celcius</p>
            <img
                src={`${baseImgUrl}${currWeather.weather[0].icon}@2x.png`}
                alt={currWeather.weather[0].description}
            />
            <p>Wind {Math.round(currWeather.wind.speed * 10) / 10} m/s</p>
          </>
        )
      }
    </div>
  )
};

export default Weather;
