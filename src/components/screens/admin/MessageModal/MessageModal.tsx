import React, { FC } from "react";
import style from './MessageModal.module.scss';
import { useRef } from "react";
import { useRouter } from "next/router";
import useKeyUp from "../hooks/useKeyUp";

interface IMessageModal {
  active: boolean,
  setActive: Function,
  message?: string,
  link?: string,
  isValidName: boolean,
}

const MessageModal: FC<IMessageModal> = ({active, setActive, message, link, isValidName}) => {

  let myRef = useRef(null);

  const router = useRouter();

  if (isValidName === false) {
    message = 'Не заполнено название !';
  }

  useKeyUp([13, 27], ()=>{
    if (active) {
      if (isValidName && link) {
        setActive(false);
        router.push(link);
      } else {
        setActive(false);
      }
    }
  })

  const submitHandler = () => {
    setActive(false);
    if(isValidName && link) {
      router.push(link);
    }
  }

  return (
    <div className={active ? `${style.modal} ${style.active}` : style.modal}>
      <div ref={myRef} className={active ? `${style.modalContent} ${style.active}` : style.modalContent} onClick={(e)=> e.stopPropagation()}>
        <p className={style.modalText}>{message}</p>
          <button 
            className={style.btnClose} 
            onClick={submitHandler}
            >Закрыть</button>
      </div>
    </div>
  )
}

export default MessageModal;