import React from 'react'
import placePNG from './place.png';
import cls from './CurrentCity.module.css'

export default function CurrentCity(props) {
  return (
    <div className={cls.CurrentCity}>
        <img src={placePNG} className={cls.CurrentCityPNG} />
        <p>{props.city[0].city}</p>
    </div>
  )
}
