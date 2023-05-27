import { FC, useState } from "react";
import style from './UserSwitch.module.scss';
import { useAppDispatch } from "@/store/hooks";
import { newPage } from "@/store/slices/adminSlice";

interface ISwitch {
  isTrue: boolean,
  firstTitle: string,
  secondTitle: string,
  isGenres: Function
}

const UserSwitch: FC<ISwitch> = ({firstTitle, secondTitle, isTrue, isGenres}) => {
  // console.log('isTrue: ', isTrue);

  let isChecked: boolean = isTrue ? false : true;

  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    isTrue === true ? isTrue = false : isTrue = true;
    isGenres(isTrue);
    dispatch(newPage(1));
  }
  
  return (
    <div className={style.toggleContainer}>
          <h3 className={style.title}>{firstTitle}</h3>
          <label className={style.toggle} onChange={toggleHandler}>
            <input type="checkbox" className={style.toggleInput} checked={isChecked}/>
            <span className={style.toggleSlider}></span>
          </label>
          <h3 className={style.title}>{secondTitle}</h3>
        </div>
  )
}

export default UserSwitch;