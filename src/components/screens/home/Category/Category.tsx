import { FC, useState } from 'react'
import styles from './Category.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import SliderItem from './Slider/SliderItem/SliderItem'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CategoryData } from './CategoryData/CategoryData'
import { filmographyData } from '@/components/ui/filmography/filmography.data'
type CategoryProps = {
  title: String
}
const Category: FC<CategoryProps> = ({ title }) => {
  const [items, setItems] = useState(filmographyData)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3
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
          <p>Посмотреть все</p>
        </div>
      </Slider>
    </div>
  )
}

export default Category