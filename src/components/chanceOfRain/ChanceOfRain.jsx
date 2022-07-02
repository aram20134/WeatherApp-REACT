import React, { useEffect, useState } from "react";
import cls from "./ChanceOfRain.module.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PillarChance from "./pillarChance/PillarChance.jsx";

export default function ChanceOfRain({ weather }) {
  var iter = 0;
  var iter2 = 0;
  var dt = [];
  var chRain = [];
  weather.map((a) => {
    a[0].raw[0].dt.map((dtt) => iter < 7 && (dt.push(dtt.slice(-8, 13)), iter++));
    a[0].raw[0].chanceOfRain.map((pop) => iter2 < 7 && (chRain.push(pop), iter2++));
  });
  const [test, setTest] = useState(false)


  return (
    <div className={cls.ChanceOfRain}>
      <p>Шанс дождя</p>
      <div className={cls.block}>
        <div className={cls.column1}>
          <p onClick={() => setTest(true)}>100%</p>
          <p>50%</p>
          <p>0%</p>
        </div>
        <div className={cls.column2}>
            {chRain.map((chRain, i) =>  {
                return (<PillarChance key={i} className={cls.pillarAll} chRain={chRain} dt={dt} i={i}  />)
            })}
        </div>
      </div>
    </div>
  );
}
