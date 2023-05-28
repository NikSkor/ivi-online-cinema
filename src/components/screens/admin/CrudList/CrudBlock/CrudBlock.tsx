import { FC, useState } from "react";
import style from './CrudBlock.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import trashImg from '../../../../../../public/trash.svg';
import editImg from '../../../../../../public/editIcon.svg';


interface ICrud {
  item: {
    id: number,
    name: string,
    enName: string|null
  },
  adress: string,
  children: React.ReactNode
}

const CrudBlock: FC<ICrud> = ({item, adress, children}) => {

const locale = useRouter().locale;

  return (
      <li key={item.id} className={style.item}>
      {locale !== 'ru' && item.enName !== null
        ? 
        <h4 className={style.itemTitle}>{item.enName}</h4>
        :
        <h4 className={style.itemTitle}>{item.name}</h4>
      }
      
      <div className={style.actionBlock}>
        {locale === 'ru'
          ? 
          <Link href={`${adress}${item.id}`} >
            <button className={`${style.actionBtn} ${style.invisibleBtn}`}>Редактировать</button>
          </Link>
          :
          <Link href={`${adress}${item.id}`}>
            <button className={`${style.actionBtn} ${style.invisibleBtn}`}>Redact</button>
          </Link>
        }
      <Link href={`${adress}${item.id}`}>
          <button className={`${style.actionBtn} ${style.minBtn} ${style.visibleBtn}`}>
            <Image src={editImg} width={20} height={20} alt="Значок редактирования"/>
          </button>
        </Link>
      <button className={`${style.actionBtn} ${style.minBtn}`} onClick={()=>{}}>
        <Image src={trashImg} width={19} height={19} alt="Значок очистки"/>
      </button>
      </div>
    </li>
  )

}

export default CrudBlock;