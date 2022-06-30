import React from 'react'
import cls from './SelectSearch.module.css'

export default function selectSearch(props) {
  return (
    <div onClick={function () {
      props.setSearch('');
      props.setWeatherLoaded(false);
      return props.setCity([{ city: props.city.city, eng: props.city.eng }])
    }} className={cls.selectSearch}>{props.city.city}</div>
  )
}
