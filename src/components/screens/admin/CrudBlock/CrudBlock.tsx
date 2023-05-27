import { FC, useState } from "react";
import style from './CrudBlock.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";

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
          <Link href={`${adress}${item.id}`} className={style.actionBtn} >
            <p data-id={item.id}>Редактировать</p>
          </Link>
          :
          <Link href={`${adress}${item.id}`} className={style.actionBtn} >
            <p data-id={item.id}>Redact</p>
          </Link>
        }
        
      <button className={style.actionBtn} onClick={()=>{}}>
        {children}
      </button>
      </div>
    </li>
  )

}

export default CrudBlock;