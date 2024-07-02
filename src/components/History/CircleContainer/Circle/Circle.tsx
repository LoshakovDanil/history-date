import { FC } from 'react';
import { Item } from './Item/Item';
import { PointData } from '../../../../types/types'
import style from './Circle.module.css'
import '../../History.css'

type Props = {
  pointsData: PointData[],
  activeBtn: PointData,
  handleClick: (point: PointData) => void,
}

export const Circle: FC<Props> = ({pointsData, activeBtn, handleClick}) => {
  return (
    <div className="circle">
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
  );
}


