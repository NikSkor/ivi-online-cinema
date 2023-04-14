import { FC, useRef, useState } from "react"
import Image from "next/image"
import styles from './Slider.module.scss'
import SliderItem from "./SliderItem/SliderItem"
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem"

const Slider:FC<{ items: IFilmographyItem[]}> = ({ items }) => {

  const slider = useRef<any>(null)
  let sliderPosition = 0

  const [isLast, setIsLast] = useState<boolean>(false)
  const [isFirst, setIsFirst] = useState<boolean>(true)

  const cardWidth = 177
  const cardsPerPage = 6

  const prevButtonHandler = () => {
    if (sliderPosition === 0) {
      setIsFirst(true)
    } else {
      setIsLast(false)
      sliderPosition += cardWidth * cardsPerPage
      slider.current.childNodes.forEach((element: any) => element.style = `transform: translateX(${sliderPosition}px)`)
    }
    console.log(sliderPosition)
  }

  const nextButtonHandler = () => {
    if (sliderPosition == (cardWidth*items.length) * -1) {
      setIsLast(true)
    } else {
      setIsFirst(false)
      sliderPosition -= cardWidth * cardsPerPage
      slider.current.childNodes.forEach((element: any) => element.style = `transform: translateX(${sliderPosition}px)`)
      console.log(isFirst)
    }
  }

  return(
    <div className={styles.slider}>
        <div className={styles.sliderTrack} ref={slider}>
          {
            items.map((film, index) => <SliderItem key={`film-${index}`} film={film} />)
          }
          <div className={styles.seeMore}>
            <p>Посмотреть все</p>
          </div>
        </div>
        {
          !isFirst && (
            <div
          className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}
          onClick={prevButtonHandler}>
          <Image
            className={styles.sliderArrow}
            src="/arrow-right-icon.svg"
            width={32}
            height={32}
            alt=""
          />
        </div>
          )
        }
        <div
          className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
          onClick={nextButtonHandler}>
          <Image
            className={styles.sliderArrow}
            src="/arrow-right-icon.svg"
            width={32}
            height={32}
            alt=""
          />
        </div>
      </div>
  )
}

export default Slider