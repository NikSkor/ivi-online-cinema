import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './Admin.module.scss';
import Image from 'next/image';
import trashImg from '../../../../public/trash.svg';
import { API_URL_GET_GENRES, API_URL_GET_MOVIES} from "./API/const";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFilms, addGenres, addPageCount, newPage, toggleSwitch} from "@/store/slices/adminSlice";
import { paginateCatalog } from "./functions/paginateCatalog";
import Pagination from "@/components/screens/admin/Pagination/Pagination";
import UserSwitch from "@/components/screens/admin/UserSwitch/UserSwitch";
import { searchInCatalog } from "./functions/searchInCatalog";
import CrudBlock from "@/components/screens/admin/GenreBlock/CrudBlock";
import Preloader from "@/components/screens/admin/Preloader/Preloader";
import { IFilms, IGenres } from "./interfaces/interfaces";
import { useRouter } from "next/router";

const Admin: FC = () => {
  const locale = useRouter().locale;
  let [searchGenres, setSearchGenres] = useState('');
  let [searchMovies, setSearchMovies] = useState('');
  let [searchInput, setSearchInput] = useState('');
  let [isLoaded, setIsLoaded] = useState(false);
  const pageNumber: number = useAppSelector(state => state.admin.page);
  let moviesPagesSum: number = useAppSelector(state => state.admin.pageCount);
  let isGenres: boolean = useAppSelector(state => state.admin.isGenre); 
  let dispatch = useAppDispatch();
  let genresCatalog: IGenres[] = useAppSelector(state => state.admin.genres);
  let filmsCatalog: IFilms[] = useAppSelector(state => state.admin.films);

  if(moviesPagesSum > 10) moviesPagesSum = 10;

  useEffect(()=> {
    localStorage.setItem('switch', JSON.stringify(isGenres));
  });


  useEffect(()=> {
    let state = localStorage.getItem('switch');
    let info: boolean;
    if(typeof state === 'string') {
      info = JSON.parse(state);
    } else {
      info = true;
    }
    dispatch(toggleSwitch(info));
  }, [dispatch]);

  const unpdateIsGenres = (value: boolean) => {
    dispatch(toggleSwitch(value));
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

  

  useEffect(() => {
    if(isGenres) {
      setIsLoaded(false);
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
      setIsLoaded(false);
      const loadMovieList = async() => {
        try {
        const response = await axios.get(`${API_URL_GET_MOVIES}?page=${pageNumber}&search=${search}`);
        console.log('Returned data:', response);
        dispatch(addFilms(response.data.movies));
        dispatch(addPageCount(response.data.pageCount));
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
  let paginatedGenresCatalog: IGenres[] = paginateCatalog(filteredCatalog, paginSize, pageNumber);

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
      setIsLoaded(false);

      if (isGenres) {
        setSearchGenres(searchInput);
      } else {
        setSearchMovies(searchInput);
      }
      setIsLoaded(true);

    }
  }


  const searchHandler = (e: any) => {
    e.preventDefault();

    setIsLoaded(false);
    dispatch(newPage(1));

    if (isGenres) {
      setSearchGenres(searchInput);
      setIsLoaded(true);
    } else {
      setSearchMovies(searchInput);
      setIsLoaded(true);
    }
  }

  return(
    <div className="container">
      <section className={style.header}>
        {locale === 'ru'
          ? <BreadCrumbs 
          pathList={[{pathLink: '/', pathName: 'Мой Иви'}]} 
          slug={'Администратор'} /> 
          : <BreadCrumbs 
          pathList={[{pathLink: '/', pathName: 'My ivi'}]} 
          slug={'Administrator'} /> 
        }
        
      </section>
      <section className={style.main}>
        {locale === 'ru'
          ? <h2 className={style.title}>Управление каталогом</h2>
          : <h2 className={style.title}>Catalog management</h2>
        }
        
        {locale === 'ru'
          ? <UserSwitch firstTitle={'Жанры'} secondTitle={'Фильмы'} isTrue={isGenres} isGenres={unpdateIsGenres}/>
          : <UserSwitch firstTitle={'Genres'} secondTitle={'Films'} isTrue={isGenres} isGenres={unpdateIsGenres}/>
        }
        

        {isGenres 
          ? 
            locale === 'ru'
              ? <h3 className={style.subTitle}>Список жанров</h3>
              : <h3 className={style.subTitle}>List of genres</h3>

          : locale === 'ru'
              ? <h3 className={style.subTitle}>Список фильмов</h3>
              : <h3 className={style.subTitle}>List of films</h3>
        }
        <div className={style.searchBlock}>
          {locale === 'ru'
          ? 
            <>
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
              </>
          : 
            <>
              <input 
                className={`${style.inputs} ${style.searchInput}`} 
                type="text" 
                placeholder='Search by name...'
                value = {searchInput}
                onChange={searchInputHandler}
                onKeyUp={enterInputHandler}
              />
              <button 
                className={`${style.actionBtn} ${style.searchBtn}`}
                onClick={searchHandler}
              >Search</button>
              </>
        }
          
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
                    name: item.name,
                    enName: item.enName
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
                    name: item.name,
                    enName: item.enName
                  }}  
                  adress={'/admin/film/'}>
                  <Image src={trashImg} data-id={item.movieId} alt="Значок очистки"/>
                </CrudBlock>
              )
            })
          }
          {isGenres
            ? <Pagination pagesSum={pages} pageActive={pageNumber} getPage={updatePage}/>
            : <Pagination pagesSum={moviesPagesSum} pageActive={pageNumber} getPage={updatePage}/>
          }
        </ul>
        {locale === 'ru'
          ? 
          <button className={style.actionBtn}>
            Добавить
          </button>
          :
          <button className={style.actionBtn}>
            Add
          </button>
        }
      </section>
    </div>
  )
}

export default Admin;