import { FC, useEffect, useState } from "react";
import Layout from '@/components/layout/Layout';
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './Admin.module.scss';
import { filmographyData } from "@/components/ui/filmography/filmography.data";
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem";
import Image from 'next/image';
import trashImg from '../../../../public/trash.svg';
import Link from "next/link";
// import { getData } from "./functions/getData";
import { API_URL_GET_GENRES, API_URL_GET_MOVIES } from "./API/const";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addGenres, addGenresSize } from "@/store/slices/adminSlice";
import { paginateCatalog } from "./functions/paginateCatalog";
import Pagination from "@/components/screens/admin/Pagination/Pagination";

interface IGenres {
  genreId: number,
  name: string
} 

const Admin: FC = () => {

  let [isGenres, setIsGenres] = useState(true);
  const pageNumber: number = useAppSelector(state => state.admin.page);
  const genresLength: number = useAppSelector(state => state.admin.genresSize);


    

  const updatePage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };


  const toggleHandler = () => {
    isGenres === true ? setIsGenres(false) : setIsGenres(true);
  }

    console.log('isGenres: ', isGenres);

  // let catalog: IFilmographyItem[] = [...filmographyData];

  let dispatch = useAppDispatch();
  let genresCatalog: IGenres[] = useAppSelector(state => state.admin.genres);
  
  useEffect(() => {
    if(isGenres) {
      axios.get(API_URL_GET_GENRES).then((response) => {
      dispatch(addGenres(response.data));
      dispatch(addGenresSize());
    });
    }
    
  }, [dispatch, isGenres]);


  let paginSize = 10;
  let paginatedGenresCatalog = paginateCatalog(genresCatalog, paginSize, pageNumber);
  console.log('paginatedGenresCatalog: ', paginatedGenresCatalog);

  let pages: number = Math.ceil(genresLength / paginSize);


  return(
    <div className="container">
      <section className={style.header}>
        <BreadCrumbs 
          pathList={[{pathLink: '/', pathName: 'Мой Иви'}]} 
          slug={'Администратор'} /> 
      </section>
      <section className={style.main}>
        <h2 className={style.title}>Управление каталогом</h2>

        <div className={style.toggleContainer}>
          <h3 className={style.subTitle}>Жанры</h3>
          <label className={style.toggle} onChange={toggleHandler}>
            <input type="checkbox" className={style.toggleInput}/>
            <span className={style.toggleSlider}></span>
          </label>
          <h3 className={style.subTitle}>Фильмы</h3>
        </div>
        {isGenres 
          ? <h3 className={style.subTitle}>Список жанров</h3> 
          : <h3 className={style.subTitle}>Список фильмов</h3> 
        }
        

        <ul className={style.list}>
        {isGenres 
          ? paginatedGenresCatalog.map((item)=> {
            return <li key={item.genreId} className={style.item}>
                <h4 className={style.itemTitle}>{item.name}</h4>
                <Link href={`/admin/${item.genreId}`} className={style.actionBtn} >
                  <p data-id={item.genreId}>Редактировать</p>
                </Link>
                <button className={style.actionBtn} onClick={()=>{}}>
                  <Image src={trashImg} data-id={item.genreId} alt="Значок очистки"/>
                </button>
              </li>
          })
          : <h3 className={style.subTitle}>Список фильмов</h3>
        }
        {/* {catalog.map((item)=> {
          return <li key={item.movieId} className={style.item}>
              <h4 className={style.itemTitle}>{item.name}</h4>
              <Link href={`/admin/${item.movieId}`} className={style.actionBtn} >
                <p data-id={item.movieId}>Редактировать</p>
              </Link>
              <button className={style.actionBtn} onClick={()=>{}}>
                <Image src={trashImg} data-id={item.movieId} alt="Значок очистки"/>
              </button>
            </li>
        })} */}
        {isGenres
          ? <Pagination pagesSum={pages} pageActive={pageNumber} getPage={updatePage}/>
          : ''
        }
      </ul>
        <button className={style.actionBtn}>
          Добавить
        </button>
      </section>
    </div>
  )
}

export default Admin;