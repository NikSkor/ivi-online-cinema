import { FC, useState } from "react";
import style from './MessageModal.module.scss';
import Link from "next/link";

interface IMessageModal {
  active: boolean,
  setActive: Function,
  message: string,
  link?: string,
  setValidateName?: Function
}

const MessageModal: FC<IMessageModal> = ({active, setActive, message, link, setValidateName}) => {

  
  return (
    <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={(e)=> e.stopPropagation()}>
      <div className={active ? `${style.modalContent} ${style.active}` : style.modalContent} onClick={(e)=> e.stopPropagation()}>
        <p className={style.modalText}>{message}</p>
        {link
          ? 
          <Link href={link}>
            <button 
              className={style.btnClose} 
              onClick={()=> {
                setActive(false);
              }}>Закрыть</button>
          </Link>
          :
          <button 
              className={style.btnClose} 
              onClick={()=> {
                setActive(false);
                if (typeof setValidateName === 'function') {
                  setValidateName(true);
                }
              }}>Закрыть</button>
        }
      </div>
    </div>
  )
}

export default MessageModal;