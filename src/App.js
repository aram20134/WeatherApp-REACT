import React, { useEffect } from 'react';
import './styles/app.css';
import AllParts from './components/allParts/AllParts';
import { Weather, WeatherInfo } from './context/index';
import { useState } from 'react';
import getWeather from './components/API/ForecastGET';

export default function App() {

  const [weather, setWeather] = useState([{}])
  const [weatherLoaded, setWeatherLoaded] = useState(false)
  const [city, setCity] = useState([{city: 'Краснодар', eng: 'Krasnodar'}])

  useEffect(() => {
    if (weatherLoaded == false) {
      async function fetch (city) {
        await getWeather(city)
        // setWeather(await getWeather(city))
        // setWeatherLoaded(true)
        .then(resp => resp != 'error' ? (setWeather(resp),setWeatherLoaded(true)) : setWeatherLoaded(null))
      }
      fetch(city)
    }
    // console.log(weatherLoaded)
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
