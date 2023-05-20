import { FC, useEffect, useState } from 'react'
import styles from './Category.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import SliderItem from './SliderItem/SliderItem'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CategoryData } from './CategoryData/CategoryData'
type CategoryProps = {
  title: String
  items: any[]
}

const Category: FC<CategoryProps> = ({ title, items }) => {
  // console.log(window)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div className={styles.category}>
      <Link href="/">
        <p>
          {title}
          <Image src="/arrow-right-icon.svg" width={19} height={19} alt="arrow" />
        </p>
      </Link>
      <Slider className={styles.sliderTrack} {...settings}>
        {
          items.map((film, index) => <SliderItem key={`film-${index}`} film={film} />)
        }
        <div className={styles.seeMore}>
          <div>
          <p>Посмотреть все</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Category