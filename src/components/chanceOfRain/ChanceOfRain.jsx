import React from "react";
import cls from "./ChanceOfRain.module.css";

export default function ChanceOfRain({ weather }) {
  var iter = 0;
  var iter2 = 0;
  var dt = [];
  var chRain = [];
  weather.map((a) => {
    a[0].raw[0].dt.map((dtt) => iter < 7 && (dt.push(dtt.slice(-8, 13)), iter++));
    a[0].raw[0].chanceOfRain.map((pop) => iter2 < 7 && (chRain.push(pop), iter2++));
  });
  return (
    <div className={cls.ChanceOfRain}>
      <p>Шанс дождя</p>
      <div className={cls.block}>
        <div className={cls.column1}>
          <p>100%</p>
          <p>50%</p>
          <p>0%</p>
        </div>
        <div className={cls.column2}>
            {chRain.map((chRain, i) =>  {
                return <div title={chRain + '%'} key={i} style={{position:'relative'}}>
                    <div className={cls.pillar} style={{height: chRain > 0 ? chRain : '1px'}}></div>
                    <div className={cls.pillarDate}>{dt[i]}</div>
                    <hr className={cls.tracePillar}></hr>
                </div>
            })}
        </div>
      </div>
    </div>
  );
}
