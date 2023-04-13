import { FC, useRef, useState } from "react"
import Image from "next/image"
import styles from './Slider.module.scss'
import { ReactNode } from "react"
import SliderItem from "./SliderItem/SliderItem"
const Slider:FC<{ items: ReactNode[]}> = ({ items }) => {
  const [isLast, setIsLast] = useState<boolean>(false)
  const [isFirst, setIsFirst] = useState<boolean>(true)

  const slider = useRef<any>(null)
  let sliderPosition = 0

  const prevButtonHandler = () => {
    sliderPosition += 177 * 6
    slider.current.childNodes.forEach((element: any) => element.style = `transform: translateX(${sliderPosition}px)`)
  }

  const nextButtonHandler = () => {
    sliderPosition -= 177 * 6
    slider.current.childNodes.forEach((element: any) => element.style = `transform: translateX(${sliderPosition}px)`)
  }

  return(
    <div className={styles.slider}>
        <div className={styles.sliderTrack} ref={slider}>
          {
            items.map(film => <SliderItem film={film} />)
          }
        </div>
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