import gsap from 'gsap'
import React, { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { PointData } from '../../../types/types';
import style from './CustomSwiper.module.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css';
import './CustomSwiper.css'


export const CustomSwiper:FC<Props> = ({activeBtn}) => {
  const swiperRef = useRef(null)
  
  gsap.timeline()
    .from(swiperRef.current, {
      opacity: 0,
      duration: 0.9,  
    })
    .to(swiperRef.current, {
      opacity: 1,
    })

  return (
    <div ref={swiperRef} className={style.swiperContainer}> 
      <div className={style.button + ' btn-prev'}>
        <span className={style.arrow}>&lsaquo;</span>
      </div>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={30} 
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev'
        }}
        modules={[ Navigation , Pagination]}
        pagination={{ clickable: true } }
        className={style.mySwiper} 
        breakpoints={{
          1200: {
          slidesPerView: 2.99,
          spaceBetween: 30,
          pagination: false
          }
        } 
        }
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

