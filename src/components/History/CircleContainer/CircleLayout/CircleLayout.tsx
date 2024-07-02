import { FC } from "react"
import { PointData } from "../../../../types/types"
import style from './CircleLayout.module.css'
import '../../History.css'

export const CircleLayout: FC<Props> = ({ activeBtn, handleClick}) =>{
  const text = activeBtn.text
  const activeNumber = activeBtn.number
  const dates = activeBtn.data.date

  return (
    <div className={style.circleLayout}>
        <div className={style.date}>
          Исторические <br/> даты
        </div>
        <div className='genre'>
          {text}
        </div>

        <div className={style.numbers}>
          <span className='number_one'>{dates[0]}</span>
          &nbsp;
          <span className='number_two'>{dates[1]}</span>
        </div>

        <div className={style.counter}>
          <div className={style.range}>
            0{activeNumber}/06
          </div>
          <div className={style.buttons}>
            <div 
              className={`${style.button} ${activeNumber === 1 ? style.disabled : ''}`}
              onClick={() => handleClick(null, -60)} 
            >
              <span className={style.arrow}>&lsaquo;</span>
            </div>
            <div 
              className={`${style.button} ${activeNumber === 6 ? style.disabled : ''}`}
              onClick={() => handleClick(null, 60)}
            >
              <span className={style.arrow}>&rsaquo;</span>
            </div>
          </div>
        </div>
      </div>
  )
}

type Props = {
  activeBtn: PointData,
  handleClick: (nextPoint: PointData | null, btnRotation?: number) => void;
}