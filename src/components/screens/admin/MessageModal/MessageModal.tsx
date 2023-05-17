import { FC, useState } from "react";
import style from './MessageModal.module.scss';
import Link from "next/link";

interface IMessageModal {
  active: boolean,
  setActive: Function,
  message: string,
  link: string,
}

const MessageModal: FC<IMessageModal> = ({active, setActive, message, link}) => {

  
  return (
    <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={(e)=> e.stopPropagation()}>
      <div className={active ? `${style.modalContent} ${style.active}` : style.modalContent} onClick={(e)=> e.stopPropagation()}>
        <p className={style.modalText}>{message}</p>
        <Link href={link}>
          <button className={style.btnClose} onClick={()=> setActive(false)}>Закрыть</button>
        </Link>
      </div>
    </div>
  )
}

export default MessageModal;