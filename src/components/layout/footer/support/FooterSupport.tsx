import React, { useState } from "react"
import { FC } from "react"
import style from './FooterSupport.module.scss'
import Image from "next/image"
import emailIcon from '/public/email_icon.svg'
import phoneIcon from '/public/phone_icon.svg'

const FooterSupport: FC = () => {

  const [showPhone, setShowPhone] = useState(false)

  return (
    <>
      <span className={style.column__title}>Служба поддержки</span>

      <div className={style.footer__description}>
        <p>Мы всегда готовы вам помочь.</p>
        <p>Наши операторы онлайн 24/7</p>
      </div>

      <div className={style.support__links}>
        <a target="_blank" href="https://www.ivi.tv/profile" className={style.footer__btn}>
          <span className={style.btn__text}>Написать в чате</span>
        </a>

        <div className={style.footer__supportBtns}>
          <a href="mailto:support@ivi.ru" className={`${style.footer__btn} ${style.square}`}>
            <div className={style.btnIcon__container}>
              <Image
                priority
                height={16}
                width={16}
                src={emailIcon}
                alt="email_icon"
              />
            </div>
          </a>

          <button 
            id='supportPhoneBtn' 
            className={`${style.footer__btn} ${style.square}`}
            onClick={() => setShowPhone(!showPhone)}>
            <div className={style.btnIcon__container}>
              <Image
                priority
                height={16}
                width={16}
                src={phoneIcon}
                alt="phone_icon"
              />
            </div>
          </button>
        </div>

        {showPhone &&
          <div className={style.supportPhone}>
            +7 (495) 555-55-55
          </div>
        }

        <div className={style.questions}>
          <a href="https://ask.ivi.ru/" className={style.question__link}>ask.ivi.ru</a>
          <p>Ответы на вопросы</p>
        </div>
      </div>
    </>
  )
}

export default FooterSupport