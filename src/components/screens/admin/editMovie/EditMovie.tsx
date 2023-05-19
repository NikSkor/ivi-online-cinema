import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditMovie.module.scss';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import MessageModal from "@/components/screens/admin/MessageModal/MessageModal";
import axios from "axios";
import { API_URL_PATCH_MOVIES } from "../API/const";


interface IFilmItem {
  id: number,
  name: string,
  enName: string,
}

interface IFilms {
  ageRating: null|number,
  countries: [],
  description: string,
  enName: null|string,
  genres: [],
  movieId: number,
  movieLength: number,
  name: string,
  persons: {},
  poster: string,
  premiere: string,
  rating: number,
  shortDescription: null|string,
  slogan: string,
  trailer: string,
  type: string,
  votes: number
}

const EditMovie: FC = () => {

  const id: number = useAppSelector(state => state.admin.filmId);
  const filmsCatalog: IFilms[] = useAppSelector(state => state.admin.films);
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const dispatch = useAppDispatch();


  let filmItem: IFilmItem = {
    id: 0,
    name: '',
    enName: ''
  }

  if (id !== undefined) {
    filmsCatalog.forEach((item) => {
    if (item.movieId === +id) {
      // Object.assign(filmItem, item);
      // dispatch(addFilmValues(filmItem));
      filmItem = {
        id: item.movieId,
        name: item.name,
        enName: item.enName !== null ? item.enName : ''
      }
    }
  })
  }

  let [name, setName] = useState(filmItem.name);
  let [enName, setEnName] = useState(filmItem.enName);


  let resetHandler = (e: any) => {
    e.preventDefault();

    setName(filmItem.name);
    setEnName(filmItem.enName);
  }

  let submitHandler = async (e: any) => {
    e.preventDefault();

    let filmValues: IFilmItem = {
    id: id,
    name: name,
    enName: enName,
  }
  // dispatch(addFilmValues(filmValues));

  let data = JSON.stringify(filmValues); 
  // console.log('data: ', data);

  const headers = {
    'Content-type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MjUxNjIzOTAyMiwiaXNBZG1pbiI6dHJ1ZX0.f1EOoLCXMQPDGD0s9QaO5tkWTsH77lDXpNdAgp_Q-1s'
  }

  try {
  const response = await axios.patch(`${API_URL_PATCH_MOVIES}${id}`, data, {
    headers: headers
  });
  console.log('Returned data:', response);
  setModalMessage(`Фильм "${filmItem.name}" обновлён.`);
  } catch (e: any) {
    console.log(`Axios request failed: ${e}`);
    setModalMessage(e.message.toString());
  }
  setModalActive(true);
  }


  let foreignNameHandler = (e: any) => {
    let reg = /[а-яА-ЯёЁ]/g;
    if (e.target.value.search(reg) !=  -1) {
        e.target.value  =  e.target.value.replace(reg, '');
    }
    setEnName(e.target.value)
  }

  const titleName = filmItem.name.slice();

  
  return(
      <div className="container">
        <section className={style.header}>
          <BreadCrumbs 
            pathList={[{pathLink: '/admin', pathName: 'Администратор'}]} 
            slug={'Фильм'} /> 
        </section>
        <section className={style.main}>
          <h2 className={style.title}>{titleName}</h2>
          <div className={style.form}>
          <label className={style.label} data-id='url'>
            Название:
            <input placeholder="Введите название" className={style.inputs} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='url'>
            Название на английском:
            <input placeholder="Введите название" className={style.inputs} type='text' value={enName} onChange={(e) => {foreignNameHandler(e)}}/>
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
        <MessageModal active={modalActive} setActive={setModalActive} link={'/admin'} message={modalMessage}/>
      </div>
  )
}

export default EditMovie;