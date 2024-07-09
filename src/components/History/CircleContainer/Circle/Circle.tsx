import gsap from 'gsap'
import { FC, useRef } from 'react';
import { Item } from './Item/Item';
import { PointData } from '../../../../types/types'
import style from './Circle.module.css'
import '../../History.css'

type Props = {
  pointsData: PointData[],
  activeBtn: PointData,
  rotationDirection: number,
  handleClick: (nextPoint: PointData | null, btnRotation?: number) => void;
}

export const Circle: FC<Props> = ({pointsData, activeBtn, rotationDirection, handleClick}) => {
  const circleRef = useRef(null)
  
  gsap.to(circleRef.current, {
    rotation: `-=${rotationDirection}`, 
    duration: 0.7, 
    ease: 'linear', 
  })
  
  return (
    <div ref={circleRef} className={style.circle}>
      {pointsData.map(point =>(
          <Item
            key={point.id}
            number={point.number}
            id={style[point.id]}
            className={`${style.point} ${activeBtn.id === point.id ? style.active : ''}`}
            handleClick={() => handleClick(point)}
          />
        ))} 
    </div>
  )
}


