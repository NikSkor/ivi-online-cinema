import { FC } from 'react'
import style from './FooterWidget.module.scss'
import Image from 'next/image'
import speacer from '/public/speaker-slash.svg'
import { useRouter } from 'next/router'

const FooterWidget: FC = () => {
  const locale = useRouter().locale
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
          {locale === 'ru' ? 'Смотрите фильмы, сериалы и мультфильмы без рекламы' : 'Watch movies, TV series and cartoons without ads'}
        </div>
      </div>
    </a>

    </>
  )
}

export default FooterWidget