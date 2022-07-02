import React from 'react'
import cls from './Loader.module.css'

export default function Loader() {
  return (
    <div style={{textAlign:'center'}} >
        <div className={cls.loader}></div>
    </div>
  )
}
