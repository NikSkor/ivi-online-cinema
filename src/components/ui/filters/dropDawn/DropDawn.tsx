import { FC, useState } from 'react'
import styles from './DropDawn.module.scss'
import { IDropDawn } from '@/interfaces/movies/IPlankItem'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickItem from '../slickItem/SlickItem'
import Checkbox from '../checkbox/Checkbox';

interface IIDropDawnList {
  filterType: string
  dropDawnList: IDropDawn[]
}

const DropDawn: FC<IIDropDawnList> = ({dropDawnList, filterType}) => {

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  }

  return (
    <div className={styles.filter__dropDawn}>
      <div className={styles.dropDawn__content}>
          <div className={styles.dropDawn__carousel}>
            <div className={styles.viewport}>
              <div className={styles.slick_track}>
                <Slider {...sliderSettings}>
                  {
                      dropDawnList.map((item) => (
                        <SlickItem 
                          key={item.value}
                          icon={item.icon}
                          name={item.name}
                          value={item.value}
                          filterType={filterType}
                        />
                      ))
                    }
                </Slider>
              </div>
            </div>
          </div>

          <div className={styles.list__container}>
            <ul className={styles.dropDawn__list}>
              {
                dropDawnList.map((item) => (
                  <Checkbox 
                    key={item.value}
                    value={item.value} 
                    name={item.name}
                    filterType={filterType}/>
                ))
              }
            </ul>
          </div>  
      </div>

    </div>
  )
}

export default DropDawn