import React, { FC } from 'react';
import style from './Pagination.module.scss';
import ArrowLeft from '../../../../../public/arrow-left.svg';
import ArrowRight from '../../../../../public/arrow-right.svg';
import { useAppDispatch} from '@/store/hooks';
import { newPage } from '@/store/slices/adminSlice';
import Image from 'next/image';



interface IPageNumbers {
  pagesSum: number,
  pageActive: number,
  getPage: Function
}


const Pagination: FC<IPageNumbers> = ({pagesSum, pageActive, getPage}) => {
  
  const dispatch = useAppDispatch();

  let arrCreate = (pages: number) => {
  let res: number[] = [1];

  if (pages === 0) res.length = 0;
  
  for (let i = 2; i <= pages; i++) {
    res.push(i);
  }

  return res;
  }

  const pageNumLeftHandler = (e : React.MouseEvent) => {
    e.preventDefault();
    if (pageActive - 1 === 0) {
      dispatch(newPage(1));
    } else {
      dispatch(newPage(pageActive-1));
    }
    getPage();
  }

  const pageNumRightHandler = (e : React.MouseEvent) => {
    e.preventDefault();
    if (pageActive + 1 >= pagesSum) {
      dispatch(newPage(pagesSum));
    } else {
      dispatch(newPage(pageActive+1));
    }
    getPage();
  }

  const pageNumberClickHandler = (e: any)=> {
    dispatch(newPage(+e.target.textContent));
    getPage();
  }

  let pagesArr: number[] = arrCreate(pagesSum);

  if (pagesSum === 0 || pagesSum === 1) return null;


  return (
    <div className={style.paginationBlock}>
      <button className={style.arrowLeft} onClick={pageNumLeftHandler}>
        <Image src={ArrowLeft} alt="Стрелка влево" />
      </button>
      <ul className={style.list}>
        {
          pagesArr.map((item) => {
            return (item === pageActive) ? <li key={item} className={`${style.item} ${style.itemActive}`}
              onClick={pageNumberClickHandler}
            >{item}</li> 
            : <li key={item} className={style.item}
              onClick={pageNumberClickHandler}
            >{item}</li>
          })
        }
      </ul>
      <button onClick={pageNumRightHandler}>
        <Image src={ArrowRight} alt="Стрелка вправо" />
      </button>
    </div>
    
  )
}

export default Pagination;