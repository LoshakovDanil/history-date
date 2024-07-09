import { FC } from 'react'
import { PointData } from '../../../types/types'
import { CircleLayout } from './CircleLayout/CircleLayout'
import { Circle } from './Circle/Circle'
import '../History.css'


export const CircleContainer: FC<Props> = ({pointsData, activeBtn, rotationDirection,  handleClick}) => {
  return(
    <div className="circleContainer">
      <Circle 
        pointsData={pointsData}
        activeBtn={activeBtn}
        rotationDirection={rotationDirection}
        handleClick={handleClick}
      />

      <CircleLayout 
        activeBtn={activeBtn}
        handleClick={handleClick}
      />
    </div>
  )
}

type Props = {
  pointsData: PointData[],
  activeBtn: PointData,
  rotationDirection: number,
  handleClick: (nextPoint: PointData | null, btnRotation?: number) => void;
}