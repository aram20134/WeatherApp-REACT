import React, { useContext } from 'react'
import cls from './AllParts.module.css';
import LeftPart from '../leftPart/LeftPart';
import RightPart from '../rightPart/RightPart';
import { WeatherInfo } from './../../context/index';

export default function AllParts() {
  const {city, setCity, setWeatherLoaded, weatherLoaded, weather} = useContext(WeatherInfo)

  return (
    <div className={cls.AllParts}> 
        <LeftPart city={city} setCity={setCity} setWeatherLoaded={setWeatherLoaded} weatherLoaded={weatherLoaded} />
        <RightPart city={city} weatherLoaded={weatherLoaded} weather={weather} />
    </div>
  )
}
