import { FC, useState } from "react";
import style from './UserSwitch.module.scss';
import { newPage } from "@/store/slices/adminSlice";
import { useAppDispatch } from "@/store/hooks";

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
          <label className={style.toggle}>
            <input type="checkbox" role="checkbox" className={style.toggleInput} checked={isChecked} onChange={toggleHandler}/>
            <span className={style.toggleSlider}></span>
          </label>
          <h3 className={style.title}>{secondTitle}</h3>
        </div>
  )
}

export default UserSwitch;