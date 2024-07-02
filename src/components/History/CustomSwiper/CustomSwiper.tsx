import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PointData } from '../../../types/types';
import style from './CustomSwiper.module.css'
import './CustomSwiper.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css';


export const CustomSwiper:FC<Props> = ({activeBtn}) => {
  return (
    <div className='swiperContainer'> 
      <div className={style.button + ' btn-prev'}>
        <span className={style.arrow}>&lsaquo;</span>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev'
        }}
        modules={[ Navigation]}
        className={style.mySwiper} 
      >

        {activeBtn.data.dateContain.map(point =>( 
          <SwiperSlide key={point.yearDate} className={style.slide}> 
            <div className={style.number}>
              {point.yearDate}
            </div>
            <div className={style.text}>
              {point.text}
            </div>
          </SwiperSlide>
        ))}  
      </Swiper>
      
      <div className={style.button + ' btn-next'}>
        <span className={style.arrow}>&rsaquo;</span>
      </div>
    </div>
  )
}

type Props = {
  activeBtn: PointData
}

