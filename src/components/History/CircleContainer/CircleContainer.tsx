import { FC } from 'react'
import { PointData } from '../../../types/types'
import { CircleLayout } from './CircleLayout/CircleLayout'
import { Circle } from './Circle/Circle'
import '../History.css'


export const CircleContainer: FC<Props> = ({pointsData, activeBtn, handleClick}) => {
  return(
    <div className="circleContainer">
      <Circle 
        pointsData={pointsData}
        activeBtn={activeBtn}
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
  handleClick: (nextPoint: PointData | null, btnRotation?: number) => void;
}