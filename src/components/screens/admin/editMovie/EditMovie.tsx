import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditMovie.module.scss';
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem";
import { filmographyData } from "@/components/ui/filmography/filmography.data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface IFilmId {
  id: string | undefined
}

interface IFilmItem {
  name: string,
  foreignName: string,
  posterURL: string,
  year: number,
  rating: number,
}

const EditMovie: FC = () => {

  const id: number = useAppSelector(state => state.admin.filmId);

  //   const dispatch = useAppDispatch();

  // dispatch(addId(+id));
  

  // let [idNum, setIdNum] = useState(0);

  let filmItem: IFilmItem = {
    name: '',
    foreignName: '',
    posterURL: '',
    year: 0,
    rating: 0,
  }

  let catalog: IFilmographyItem[] = [...filmographyData];
  
  if (id !== undefined) {
    // setIdNum(+id);
    catalog.forEach((item) => {
    if (item.filmId === +id) {
      Object.assign(filmItem, item);
    }
  })
  }

  let [name, setName] = useState(filmItem.name);
  let [foreignName, setForeignName] = useState(filmItem.foreignName);
  let [urlImg, setUrlImg] = useState(filmItem.posterURL);
  let [year, setYear] = useState(filmItem.year);
  let [rating, setRating] = useState(filmItem.rating);

  
  return(
      <div className="container">
        <section className={style.header}>
          <BreadCrumbs 
            pathList={[{pathLink: '/admin/', pathName: 'Администратор'}]} 
            slug={'Фильм'} /> 
        </section>
        <section className={style.main}>
          <h2 className={style.title}>{name}</h2>
          <div className={style.form}>
            <label className={style.label} data-id='url'>
            Ссылка на постер:
            <input className={style.inputs} type='text' value={urlImg} onChange={(e) => {setUrlImg(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Название:
            <input className={style.inputs} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Название на английском:
            <input className={style.inputs} type='text' value={foreignName} onChange={(e) => {setForeignName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Год:
            <input className={style.inputs} type='text' value={year} onChange={(e) => {setYear(+e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Рейтинг:
            <input className={style.inputs} type='number' value={rating} onChange={(e) => {setRating(+e.target.value)}}/>
          </label>
          </div>
        </section>
      </div>
  )
}

export default EditMovie;