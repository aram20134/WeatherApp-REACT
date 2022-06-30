import React from 'react'
import cls from './AllParts.module.css';
import LeftPart from '../leftPart/LeftPart';
import RightPart from '../rightPart/RightPart';

export default function allParts() {
  return (
    <div className={cls.AllParts}> 
        <LeftPart />
        <RightPart />
    </div>
  )
}
