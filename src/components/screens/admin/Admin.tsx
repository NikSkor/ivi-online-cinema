import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './Admin.module.scss';
import Image from 'next/image';
import trashImg from '../../../../public/trash.svg';
import { API_URL_GET_GENRES, API_URL_GET_MOVIES} from "./API/const";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFilms, addGenres, addGenresSize } from "@/store/slices/adminSlice";
import { paginateCatalog } from "./functions/paginateCatalog";
import Pagination from "@/components/screens/admin/Pagination/Pagination";
import UserSwitch from "@/components/screens/admin/UserSwitch/UserSwitch";
import { searchInCatalog } from "./functions/searchInCatalog";
import CrudBlock from "./GenreBlock/CrudBlock";

interface IGenres {
  genreId: number,
  name: string,
  enname: null|string
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

const Admin: FC = () => {

  let [searchGenres, setSearchGenres] = useState('');
  let [searchMovies, setSearchMovies] = useState('');


  let [isGenres, setIsGenres] = useState(true);
  const pageNumber: number = useAppSelector(state => state.admin.page);

  // console.log('isGenres: ', isGenres);

  const unpdateIsGenres = (value: boolean) => {
    setIsGenres(value);
  }
    

  const updatePage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  let dispatch = useAppDispatch();
  let genresCatalog: IGenres[] = useAppSelector(state => state.admin.genres);
  let filmsCatalog: IFilms[] = useAppSelector(state => state.admin.films);

  
  useEffect(() => {
    if(isGenres) {
      axios.get(API_URL_GET_GENRES).then((response) => {
      dispatch(addGenres(response.data));
      // console.log('response.data: ', response.data);
      dispatch(addGenresSize());
    });
    }
    
  }, [dispatch,isGenres]);

  let search = encodeURIComponent(searchMovies);

    useEffect(() => {
    if(!isGenres) {
      axios.get(`${API_URL_GET_MOVIES}?page=${pageNumber}&search=${search}`).then((response) => {
      // dispatch(addGenres(response.data));
      console.log('response.data: ', response);
      dispatch(addFilms(response.data));
      // filmCatalog = response.data;
    });
    }
    
  }, [dispatch,search,isGenres, pageNumber]);

      // console.log('filmCatalog: ', filmCatalog);

  console.log('filmsCatalog: ', filmsCatalog);



  let filteredCatalog: IGenres[] = searchInCatalog(genresCatalog, searchGenres);


  let paginSize = 10;
  let paginatedGenresCatalog = paginateCatalog(filteredCatalog, paginSize, pageNumber);

  let pages: number = Math.ceil(filteredCatalog.length / paginSize);


  const searchHandler = (e: any) => {
    if (isGenres) {
      setSearchGenres(e.target.value);
    } else {
      setSearchMovies(e.target.value);
    }
  }

  return(
    <div className="container">
      <section className={style.header}>
        <BreadCrumbs 
          pathList={[{pathLink: '/', pathName: 'Мой Иви'}]} 
          slug={'Администратор'} /> 
      </section>
      <section className={style.main}>
        <h2 className={style.title}>Управление каталогом</h2>

        <UserSwitch firstTitle={'Жанры'} secondTitle={'Фильмы'} isTrue={isGenres} isGenres={unpdateIsGenres}/>

        {isGenres 
          ? 
          (
            <h3 className={style.subTitle}>Список жанров</h3>
            
          )
          : <h3 className={style.subTitle}>Список фильмов</h3> 
        }
        <input 
          className={style.inputs} 
          type="text" 
          placeholder='Поиск по названию...'
          value = {isGenres ? searchGenres: searchMovies}
          onChange={searchHandler}
        />

        <ul className={style.list}>
        {isGenres 
          ? paginatedGenresCatalog.map((item)=> {
            return (
              <CrudBlock 
                key={item.genreId} 
                item={{
                  id: item.genreId,
                  name: item.name
                }}  
                adress={'/admin/genre/'}>
                <Image src={trashImg} data-id={item.genreId} alt="Значок очистки"/>
              </CrudBlock>
            )
          })
          : filmsCatalog.map((item)=> {
            return (
              <CrudBlock 
                key={item.movieId} 
                item={{
                  id: item.movieId,
                  name: item.name
                }}  
                adress={'/admin/film/'}>
                <Image src={trashImg} data-id={item.movieId} alt="Значок очистки"/>
              </CrudBlock>
            )
          })
        }
        {isGenres
          ? <Pagination pagesSum={pages} pageActive={pageNumber} getPage={updatePage}/>
          : <Pagination pagesSum={10} pageActive={pageNumber} getPage={updatePage}/>
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