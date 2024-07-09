import { useCallback, useRef, useState } from 'react';
import { CustomSwiper } from './CustomSwiper/CustomSwiper';
import { CircleContainer } from './CircleContainer/CircleContainer';
import { PointData } from '../../types/types';
import './History.css';


export const History = () => {
  const [activeBtn, setActiveBtn] = useState(pointsData[0])
  const isAnimatingRef = useRef(false);
  const [rotationDirection, setRotationDirection] = useState<number>(0)

  const handleClick = useCallback((nextPoint: PointData | null, btnRotation?: number) => {
    if (isAnimatingRef.current) return; 
    isAnimatingRef.current = true;
    
    if (nextPoint) {
      const currentAngle = (activeBtn.number - 1) * 60
      const nextAngle = (nextPoint.number - 1) * 60
    
      let tempRotationDirection = nextAngle - currentAngle;

      if (tempRotationDirection > 180) {
        tempRotationDirection -= 360
      } else if (tempRotationDirection < -180) {
        tempRotationDirection += 360
      }

      setRotationDirection(tempRotationDirection);
      setActiveBtn(nextPoint);

    } else if (btnRotation !== undefined) {
      const currentIndex = activeBtn.number - 1
      const nextIndex = (currentIndex + (btnRotation === 60 ? 1 : -1) + 6) % 6
      
      setActiveBtn(pointsData[nextIndex])
      setRotationDirection(btnRotation)
    } else {
      return
    }

    setTimeout(() => {
      isAnimatingRef.current = false
    }, 700)
  },[ activeBtn])

  
  return (
    <div className='History_big_container'>
      <div className='History_container'>
        <div className="History">

          <CircleContainer 
            pointsData={pointsData}
            activeBtn={activeBtn}
            rotationDirection={rotationDirection}
            handleClick={handleClick}
          />
          
          <CustomSwiper 
            activeBtn={activeBtn}
          />
          
        </div>
      </div>
    </div>
  ) 
}



const pointsData: PointData[] = [
  { id: 'point1', number: 1, text: 'Технологии', data: {date: [1980,1986], 
    dateContain: [
      { yearDate : 1980, text: 'IBM представляет первый персональный компьютер, революционизируя технологическую отрасль'},
      { yearDate : 1983, text: 'Apple выпускает первый коммерчески успешный персональный компьютер Macintosh'},
      { yearDate : 1984, text: 'Sony представляет первый CD-плеер, открывая новую эру звукозаписи и потребительской электроники'},
      { yearDate : 1986, text: 'Microsoft выпускает операционную систему Windows, устанавливая новые стандарты в компьютерной индустрии'},
    ]} 
  },  
  { id: 'point2', number: 2, text: 'Кино', data: {date: [1987,1991], 
    dateContain: [
      { yearDate : 1987, text: '«Хищник» - Экшн-фантастика о команде спецназа, охотящейся на инопланетного хищника на планете-джунглях'},
      { yearDate : 1988, text: '«Крепкий орешек» - Триллер с Брюсом Уиллисом о полицейском, замешанном в остановке террористов в небоскрёбе.'},
      { yearDate : 1989, text: '«Назад в будущее 2» - Приключенческая комедия о путешествии во времени и его последствиях для молодого Марти МакФлая'},
      { yearDate : 1990, text: '«Танцующий с волками» - Драма Кевина Костнера о взаимоотношениях между американским военным и индейцами на Диком Западе'},
      { yearDate : 1991, text: '«Молчание ягнят» - Психологический триллер о молодом агенте ФБР, охотящемся на серийного убийцу с помощью заключенного-психопата.'},
    ]} 
  },
  { id: 'point3', number: 3, text: 'Литература', data: {date: [1992,1997], 
    dateContain: [
      { yearDate : 1992, text: 'Нобелевская премия по литературе — Дерек уолкотт «За блестящий образец карибского эпоса в 64 разделах»'},
      { yearDate : 1994, text: '«Бессоница» — роман Стивена Кинга, вошёл в список бестселлеров по версии Publishers Weekly за 1994 год.'},
      { yearDate : 1995, text: 'Нобелевская премия по литературе — Шеймас Хини'},
      { yearDate : 1996, text: '«Престиж», всемирная премия фэнтези за лучший роман — Кристофер Прист'},
    ]} 
  },
  { id: 'point4', number: 4, text: 'Театр', data: {date: [1999, 2004], 
    dateContain: [
      { yearDate : 1999, text: '«Мамма Миа!» — Мюзикл, основанный на песнях группы ABBA, впервые был представлен на сцене в Лондоне в 1999 году'},
      { yearDate : 2001, text: '«Кто боится Вирджинии Вулф?» — ЭВ 2001 году в Московском Художественном театре им. Чехова прошла премьера'},
      { yearDate : 2002, text: '"Театр.doc" в Москве. В 2002 году в Москве был основан "Театр.doc" - независимый театр, специализирующийся на документальных и социальных пьесах'},
      { yearDate : 2004, text: '«Скрипка Ротшильда» — В 2004 году в МХТ им. Чехова состоялась премьера пьесы по мотивам рассказа Антона Чехова'},
    ]} 
  },
  { id: 'point5', number: 5, text: 'Спорт', data: {date: [2006,2014], 
    dateContain: [
      { yearDate : 2006, text: 'Италия побеждает в чемпионате мира по футболу в Германии'},
      { yearDate : 2010, text: 'Чемпионат мира по футболу в Южной Африке: Испания становится чемпионом'},
      { yearDate : 2012, text: 'Чемпионом Европы по футболу 2012 стала Испания'},
    ]} 
  },
  { id: 'point6', number: 6, text: 'Наука', data: {date: [2015,2022], 
    dateContain: [ 
      { yearDate : 2015, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
      { yearDate : 2016, text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'},
      { yearDate : 2017, text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'},
      { yearDate : 2018, text: 'Старт солнечной миссии Parker Solar Probe состоялся в августе 2018 года'},
    ]} 
  },
]





