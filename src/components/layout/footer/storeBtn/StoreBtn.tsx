import { FC } from 'react'
import { IStore } from '@/interfaces/footer/IStore'
import style from './StoreBtn.module.scss'
import Image from 'next/image'

const StoreBtn: FC<IStore> = ({linkURL, imgURL, caption, preamble}) => {
  return (
    <a href={linkURL} target='_blank' className={style.storeBtn}>
      <Image
        className={style.btn__icon}
        priority
        height={20}
        width={20}
        src={imgURL} 
        alt="store_icon"
      />
      <div className={style.storeBtn__textBlock}>
        {preamble &&
        <p className={style.preamble}>{preamble}</p>
        }
        <p className={style.caption}>{caption}</p>
      </div>
    </a>
    )
  }

export default StoreBtn