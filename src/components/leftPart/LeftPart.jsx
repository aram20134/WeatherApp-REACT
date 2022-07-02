import React from "react";
import classes from "./LeftPart.module.css";
import SearchBar from "../searchBar/SearchBar";
import CurrentCity from "../currentCity/CurrentCity";
import { useContext } from 'react';
import { cities } from "../../other/cities";
import { WeatherInfo } from './../../context/index';
import Weather from "../weather/Weather";

export default function LeftPart({city, setCity, weatherLoaded, setWeatherLoaded}) {
  // const {city, setCity, setWeatherLoaded, weatherLoaded} = useContext(WeatherInfo)
  function isWeatherError (weatherLoaded, city) {
    if (weatherLoaded === null) {
      return 'Ошибка...'
    } else {
      return <Weather city={city} weatherLoaded={weatherLoaded}  />
    }
  }
  
  return (
    <div className={classes.leftPart}>
      <SearchBar setWeatherLoaded={setWeatherLoaded} cities={cities} setCity={setCity} CurrentCity={city} />
      <h1>
        <i>Прогноз</i> погоды
      </h1>
      <CurrentCity city={city} />
      {/* {<Weather city={city} weatherLoaded={weatherLoaded}  />} */}
      {isWeatherError(weatherLoaded, city)}
    </div>
  );
}




