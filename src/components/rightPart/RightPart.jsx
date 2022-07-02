import React, { useEffect } from "react";
import cls from "./RightPart.module.css";
import { weatherCondition } from "../../other/weatherCondition";
import ChanceOfRain from './../chanceOfRain/ChanceOfRain';
import Loader from './../UI/Loader/Loader';

export default function RightPart({ city, weatherLoaded, weather }) {
  var today; weatherLoaded ? today = weather[0][0].data[0] : today = null

  var weekday = new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(new Date())
  weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)
  var month = new Intl.DateTimeFormat('ru-RU', {month: 'long'}).format(new Date())
  month = month.charAt(0).toUpperCase() + month.slice(1)

  return weatherLoaded ? (
    <div className={cls.RightPart}>
      <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', padding: '50px'}}>
      {weatherCondition.map((condition) => {
        if (today.description == condition.name) {
          return <img alt={'weather'} key={today} title={condition.name} src={condition.trace} className={cls.ico} />
        }
      })}
        <div className={cls.MainInfo}>
          <div className={cls.MainInfo2}>
            <p style={{ fontSize: "40px" }}>Сегодня</p>
            <p className={cls.date}>{weekday + ', ' + new Date().getDate() + ' ' + month}</p>
          </div>
        </div>
        <div className={cls.MainInfo3}>
          <p className={cls.deg}>{Math.round(today.temp)}</p>
          <p className={cls.degC}>°C</p>
        </div>
        <p className={cls.date} style={{textAlign:'center'}}>{city[0].country + ', ' + city[0].city}</p>
      </div>
      <ChanceOfRain weather={weather} />
    </div>
  ) : (
    <div className={cls.RightPart}>
        <Loader />
    </div>
  );
}
