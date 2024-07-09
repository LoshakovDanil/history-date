import gsap from 'gsap'
import { FC, useRef } from "react"
import { PointData } from "../../../../types/types"
import style from './CircleLayout.module.css'
import '../../History.css'


export const CircleLayout: FC<Props> = ({ activeBtn, handleClick }) =>{
  const text = activeBtn.text
  const activeNumber = activeBtn.number
  const numbers = activeBtn.data.date
  const genreRef = useRef(null)
  const numberOneRef = useRef(null)
  const numberTwoRef = useRef(null)
  
  gsap.timeline()
  .from(genreRef.current, {
    opacity: 0,
    duration: 0.9,  
  })
  .to(genreRef.current, {
    opacity: 1,
  })

  gsap.to(numberOneRef.current, {
    textContent: numbers[0],
    duration: 0.6,
    ease: 'power1.inOut',
    snap: { textContent: 1 },
  })
  gsap.to(numberTwoRef.current, {
    textContent: numbers[1],
    duration: 0.6,
    ease: 'power1.inOut',
    snap: { textContent: 1 },
  })
  
  
  return (
    <div className={style.circleLayout}>
        <div className={style.date}>
          Исторические <br/> даты
        </div>
        <div className={style.numbers}>
          <span ref={numberOneRef} className={style.number_one}>1980</span>
          &nbsp;
          <span ref={numberTwoRef} className={style.number_two}>1986</span>
        </div>

        <div ref={genreRef} className={style.genre}>
          {text}
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