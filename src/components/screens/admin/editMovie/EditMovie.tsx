import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditMovie.module.scss';
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem";
import { filmographyData } from "@/components/ui/filmography/filmography.data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { addFilmValues } from '@/store/slices/adminSlice';


interface IFilmItem {
  name: string,
  foreignName: string,
  posterURL: string,
  year: number,
  rating: number,
}

const EditMovie: FC = () => {

  const id: number = useAppSelector(state => state.admin.filmId);

  const dispatch = useAppDispatch();


  let filmItem: IFilmItem = {
    name: '',
    foreignName: '',
    posterURL: '',
    year: 0,
    rating: 0,
  }

  let catalog: IFilmographyItem[] = [...filmographyData];
  
  if (id !== undefined) {
    catalog.forEach((item) => {
    if (item.movieId === +id) {
      Object.assign(filmItem, item);
      dispatch(addFilmValues(filmItem));
    }
  })
  }

  let [name, setName] = useState(filmItem.name);
  let [foreignName, setForeignName] = useState(filmItem.foreignName);
  let [urlImg, setUrlImg] = useState(filmItem.posterURL);
  let [year, setYear] = useState(filmItem.year);
  let [rating, setRating] = useState(filmItem.rating);

  let resetHandler = (e: any) => {
    e.preventDefault();

    setName(filmItem.name);
    setForeignName(filmItem.foreignName);
    setUrlImg(filmItem.posterURL);
    setYear(filmItem.year);
    setRating(filmItem.rating);

  }

  let submitHandler = (e: any) => {
    e.preventDefault();

    let filmValues: IFilmItem = {
    name: name,
    foreignName: foreignName,
    posterURL: urlImg,
    year: year,
    rating: rating,
  }
  dispatch(addFilmValues(filmValues));
  }

  let foreignNameHandler = (e: any) => {
    let reg = /[а-яА-ЯёЁ]/g;
    if (e.target.value.search(reg) !=  -1) {
        e.target.value  =  e.target.value.replace(reg, '');
    }
    setForeignName(e.target.value)
  }

  
  return(
      <div className="container">
        <section className={style.header}>
          <BreadCrumbs 
            pathList={[{pathLink: '/admin', pathName: 'Администратор'}]} 
            slug={'Фильм'} /> 
        </section>
        <section className={style.main}>
          <h2 className={style.title}>{name}</h2>
          <div className={style.form}>
            <label className={style.label} data-id='url'>
            Ссылка на постер:
            <input 
              disabled 
              className={style.inputs} 
              type='text'
              value={urlImg} 

              onChange={(e) => {setUrlImg(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Название:
            <input placeholder="Введите название" className={style.inputs} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Название на английском:
            <input placeholder="Введите название" className={style.inputs} type='text' value={foreignName} onChange={(e) => {foreignNameHandler(e)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Год:
            <input disabled className={style.inputs} type='text' value={year} onChange={(e) => {setYear(+e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Рейтинг:
            <input disabled className={style.inputs} type='number' value={rating} onChange={(e) => {setRating(+e.target.value)}}/>
          </label>
          </div>
          <button className={style.actionBtn} onClick={(e) => {resetHandler(e)}}>Сбросить</button>
          <button className={style.actionBtn} onClick={(e) => {submitHandler(e)}}>Сохранить</button>
          <Link href={'/admin'} onClick={() => {
            }}>
          <button className={style.actionBtn}>
            Назад
          </button>
        </Link>
        </section>
      </div>
  )
}

export default EditMovie;