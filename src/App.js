import React, { useEffect } from 'react';
import './styles/app.css';
import AllParts from './components/allParts/AllParts';
import { WeatherInfo } from './context/index';
import { useState } from 'react';
import getWeather from './components/API/ForecastGET';
import { cities } from './other/cities';

export default function App() {

  const [weather, setWeather] = useState([{}])
  const [weatherLoaded, setWeatherLoaded] = useState(false)
  const [city, setCity] = useState(localStorage.getItem('city') == null ? [cities[0]] : cities.filter((city) => city.city.includes(JSON.parse(localStorage.getItem('city')).city)))

  useEffect(() => {
    if (weatherLoaded == false) {
      async function fetch (city) {
        await getWeather(city)
        .then(resp => resp != 'error' ? (setWeather(resp),setWeatherLoaded(true)) : setWeatherLoaded(null))
      }
      fetch(city)
    }
    // console.log(JSON.parse(localStorage.getItem('city')).city)
  }, [city])
  

  return (
    <div className='main'>
        <WeatherInfo.Provider value={{
          weather,
          setWeather,
          city,
          setCity,
          setWeatherLoaded,
          weatherLoaded
        }}>
        <AllParts />
        </WeatherInfo.Provider>
    </div>
  );
}
