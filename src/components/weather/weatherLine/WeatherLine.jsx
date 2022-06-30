import React from 'react'
import { weatherCondition } from '../../../other/weatherCondition';
import cls from './WeatherLine.module.css';

export default function WeatherLine({info}) {
  var today = new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(new Date());
  today = today.charAt(0).toUpperCase() + today.slice(1)
  return (
    <div className={cls.WeatherLine}>
      {today == info.day ? <p>Сегодня</p> : <p>{info.day}</p>}
      <div className={cls.part}>
        <img alt={'humidity'} title={'Влажность'} src={weatherCondition.slice(-1)[0].trace} className={cls.ico} />
        {<p>{Math.round(info.data[0].humidity)}%</p>}
      </div>
      {weatherCondition.map((condition) => {
        if (info.data[0].description == condition.name) {
          return <img alt={'weather'} title={condition.name} key={info.data[0]} src={condition.trace} className={cls.ico} />
        }
      })}
      {<p>{Math.round(info.data[0].temp)}°C</p>}
    </div>
  )
}
