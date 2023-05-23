import { FC, useState } from "react";
import style from './CrudBlock.module.scss';
import Link from "next/link";

interface ICrud {
  item: {
    id: number,
    name: string
  },
  adress: string,
  children: React.ReactNode
}

const CrudBlock: FC<ICrud> = ({item, adress, children}) => {

  return (
      <li key={item.id} className={style.item}>
      <h4 className={style.itemTitle}>{item.name}</h4>
      <div className={style.actionBlock}>
        <Link href={`${adress}${item.id}`} className={style.actionBtn} >
        <p data-id={item.id}>Редактировать</p>
      </Link>
      <button className={style.actionBtn} onClick={()=>{}}>
        {children}
      </button>
      </div>
    </li>
  )

}

export default CrudBlock;