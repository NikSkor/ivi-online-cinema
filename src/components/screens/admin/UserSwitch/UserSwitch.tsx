import { FC, useState } from "react";
import style from './UserSwitch.module.scss';
import { useAppDispatch } from "@/store/hooks";
import { setIsGenres } from "@/store/slices/adminSlice";

interface ISwitch {
  isTrue: boolean,
  firstTitle: string,
  secondTitle: string
}


const UserSwitch: FC<ISwitch> = ({firstTitle, secondTitle, isTrue}) => {

  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    isTrue === true ? isTrue = false : isTrue = true;
    dispatch(setIsGenres(isTrue));
  }
  
  return (
    <div className={style.toggleContainer}>
          <h3 className={style.title}>{firstTitle}</h3>
          <label className={style.toggle} onChange={toggleHandler}>
            <input type="checkbox" className={style.toggleInput}/>
            <span className={style.toggleSlider}></span>
          </label>
          <h3 className={style.title}>{secondTitle}</h3>
        </div>
  )
}

export default UserSwitch;