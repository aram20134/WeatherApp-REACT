import React, { useContext } from "react";
import { WeatherInfo } from "./../../context/index";
import WeatherLine from "./weatherLine/WeatherLine";
import cls from './Weather.module.css';
import Loader from "../UI/Loader/Loader";

export default function Weather({ city, weatherLoaded }) {
  const { weather, setWeather } = useContext(WeatherInfo);
  return (
    <div className={cls.weatherBlock}>
      <h3>Неделя</h3>
      { weatherLoaded
        ? weather.map(day => <WeatherLine key={day[0].day} info={day[0]} />)
        
        : <Loader />
      }
    </div>
  );
}
