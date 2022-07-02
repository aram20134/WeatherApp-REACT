import React from 'react'
import cls from '../ChanceOfRain.module.css'
import { CSSTransition } from 'react-transition-group';

export default function Pillar({chRain, dt, i}) {
    // console.log(chRain)
  return (
    <div title={chRain + '%'} style={{position:'relative'}}>
    <CSSTransition timeout={200} in={true} key={i} unmountOnExit appear classNames={{
        appear: cls.pillarAllEnter,
        appearActive: cls.pillarAllEnterActive,
        appearDone: cls.pillarAllEnterDone
    }} >
    <div className={cls.pillar} style={{height: chRain > 0 ? chRain : '1px'}}></div>
    </CSSTransition>
        <div className={cls.pillarDate}>{dt[i]}</div>
        <hr className={cls.tracePillar}></hr>
    </div>
  )
}
