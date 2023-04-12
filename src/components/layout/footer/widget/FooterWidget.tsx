import { FC } from 'react'
import style from './FooterWidget.module.scss'
import Image from 'next/image'
import speacer from '/public/speaker-slash.svg'

const FooterWidget: FC = () => {
  return (
    <>
    <a href="https://www.ivi.tv/subscribe?redirect_url=%2F">
      <div className={style.footerWidget}>
        <div className={style.footerWidget__iconBlock}>
          <Image
            priority
            height={56}
            width={56}
            src={speacer}
            alt="speacer_icon"
          />
        </div>
        <div className={style.footerWidget__text}>
          Смотрите фильмы, сериалы и мультфильмы без рекламы
        </div>
      </div>
    </a>

    </>
  )
}

export default FooterWidget