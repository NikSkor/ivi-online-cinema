import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './Admin.module.scss';
import Image from 'next/image';
import trashImg from '../../../../public/trash.svg';
import { API_URL_GET_GENRES, API_URL_GET_MOVIES} from "./API/const";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFilms, addGenres} from "@/store/slices/adminSlice";
import { paginateCatalog } from "./functions/paginateCatalog";
import Pagination from "@/components/screens/admin/Pagination/Pagination";
import UserSwitch from "@/components/screens/admin/UserSwitch/UserSwitch";
import { searchInCatalog } from "./functions/searchInCatalog";
import CrudBlock from "@/components/screens/admin/GenreBlock/CrudBlock";
import Preloader from "@/components/screens/admin/Preloader/Preloader";
import { IFilms, IGenres } from "./interfaces/interfaces";
import { type } from "os";

const Admin: FC = () => {

  let [searchGenres, setSearchGenres] = useState('');
  let [searchMovies, setSearchMovies] = useState('');
  let [searchInput, setSearchInput] = useState('');
  let [isLoaded, setIsLoaded] = useState(false);
  let [isGenres, setIsGenres] = useState(true);
  const pageNumber: number = useAppSelector(state => state.admin.page);

  useEffect(()=> {
    localStorage.setItem('switch', JSON.stringify(isGenres));
  });

  useEffect(()=> {
    const data = localStorage.getItem('switch');
    if(typeof data === 'string') {
      let item = JSON.parse(data);
      if (item) {
      setIsGenres(item);
    }
    }
  }, [isGenres]);

  const unpdateIsGenres = (value: boolean) => {
    setIsGenres(value);
    setSearchInput('');
    setSearchGenres('');
    setSearchMovies('');
    setIsLoaded(false);
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
      const loadGenreList = async() => {
        try {
          const response = await axios.get(API_URL_GET_GENRES);
          dispatch(addGenres(response.data));
          setIsLoaded(true);

        } catch (e: any) {
            console.log(`Axios request failed: ${e}`);
        }
      }
      loadGenreList();
    }
    
  }, [dispatch,isGenres]);

  let search = encodeURIComponent(searchMovies);

    useEffect(() => {
    if(!isGenres) {
      const loadMovieList = async() => {
        try {
        const response = await axios.get(`${API_URL_GET_MOVIES}?page=${pageNumber}&search=${search}`);
        console.log('Returned data:', response);
        dispatch(addFilms(response.data));
        setIsLoaded(true);
        } catch (e: any) {
          console.log(`Axios request failed: ${e}`);
          setSearchMovies('');
        }
      }

      loadMovieList();
    }
    
  }, [dispatch,search,isGenres, pageNumber]);

  let filteredCatalog: IGenres[] = searchInCatalog(genresCatalog, searchGenres);


  let paginSize = 10;
  let paginatedGenresCatalog = paginateCatalog(filteredCatalog, paginSize, pageNumber);

  let pages: number = Math.ceil(filteredCatalog.length / paginSize);

  const searchInputHandler = (e: any) => {
    let reg = /[a-zA-Z]/g;
    if (e.target.value.search(reg) !=  -1) {
        e.target.value  =  e.target.value.replace(reg, '');
    }

    setSearchInput(e.target.value)
  }

  const enterInputHandler = (e: any) => {
    if( e.keyCode === 13 ) {
      if (isGenres) {
        setSearchGenres(searchInput);
      } else {
        setSearchMovies(searchInput);
      }
      setIsLoaded(false);
    }
  }


  const searchHandler = (e: any) => {
    e.preventDefault();

    setIsLoaded(false);

    if (isGenres) {
      setSearchGenres(searchInput);
    } else {
      setSearchMovies(searchInput);
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
        <div className={style.searchBlock}>
          <input 
          className={`${style.inputs} ${style.searchInput}`} 
          type="text" 
          placeholder='Поиск по названию...'
          value = {searchInput}
          onChange={searchInputHandler}
          onKeyUp={enterInputHandler}
        />
          <button 
            className={`${style.actionBtn} ${style.searchBtn}`}
            onClick={searchHandler}
            >Искать</button>
        </div>
        

        <ul className={`${style.list}`}>
          {!isLoaded && <Preloader/>}
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