import React, { useContext, useEffect, useState } from "react";
import getWeather from "../API/ForecastGET";
import { WeatherInfo } from "./../../context/index";
import WeatherLine from "./weatherLine/WeatherLine";

export default function Weather({ city, weatherLoaded }) {
  const { weather, setWeather } = useContext(WeatherInfo);
  return (
    <div style={{display: 'flex',flexDirection: 'column',gap: '5px'}}>
      { weatherLoaded
        ? weather.map(day => <WeatherLine key={day[0].day} info={day[0]} />)
        
        : 'Загрузка...'
      }
    </div>
  );
}
