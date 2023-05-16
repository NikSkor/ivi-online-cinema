import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditGenre.module.scss';
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem";
import { filmographyData } from "@/components/ui/filmography/filmography.data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { addFilmValues, addGenreValues } from '@/store/slices/adminSlice';
import axios from "axios";


interface IGenreItem {
  id: number,
  name: string,
  enName: string,
}

interface IGenres {
  genreId: number,
  name: string
} 

const EditGenre: FC = () => {

  const id: number = useAppSelector(state => state.admin.genreId);
  const genresCatalog: IGenres[] = useAppSelector(state => state.admin.genres);
  // const values: IGenreItem = useAppSelector(state => state.admin.genreValues); 
  // const [isDisabled, setIsDisabled] = useState(false);

  // if(genresCatalog.length === 0) {
  //   setIsDisabled(true);
  // } else {
  //   setIsDisabled(true);
  // }

  // console.log('isDisabled: ', isDisabled);

  const dispatch = useAppDispatch();


  let genreItem: IGenreItem = {
    id: 0,
    name: '',
    enName: '',
  }


  // let catalog: IFilmographyItem[] = [...filmographyData];
  
  if (id !== undefined) {
    genresCatalog.forEach((item) => {
    if (item.genreId === +id) {
      genreItem = {
        id: item.genreId,
        name: item.name,
        enName: ''
      }
      // Object.assign(genreItem, item);
      // dispatch(addGenreValues(genreItem));
      // console.log('genreItem: ', genreItem);
    }
  })
  }

  const titleName = genreItem.name.slice();

  console.log('genreItem: ',genreItem);

// useEffect(()=> {
//   window.localStorage.setItem('genreItem', JSON.stringify(genreItem));
// },[genreItem])

  let [name, setName] = useState(genreItem.name);
  let [enName, setEnName] = useState(genreItem.enName);

  // useEffect(()=> {
  //   setName(JSON.parse(window.localStorage.getItem('genreName')));
  //   setEnName(JSON.parse(window.localStorage.getItem('genreEnName')));

  // },[])

  // useEffect(()=> {
  //   window.localStorage.setItem('genreName', JSON.stringify(name));
  //   window.localStorage.setItem('genreEnName', JSON.stringify(enName));

  // },[name, enName])






  let resetHandler = (e: any) => {
    e.preventDefault();

    setName(genreItem.name);
    setEnName(genreItem.enName);
  }

  let submitHandler = async (e: any) => {
    e.preventDefault();

    let genreValues: IGenreItem = {
    id: id,
    name: name,
    enName: enName
  }

  let data = JSON.stringify(genreValues); 
  console.log('data: ', data);

  try {
  const response = await axios.patch(`http://localhost:5000/api/admin/genre/${id}`, data);
  console.log('Returned data:', response);
} catch (e) {
  console.log(`Axios request failed: ${e}`);
}

  // axios.patch(`http://localhost:5000/api/admin/genre/${id}`, genreValues)
  //   .then(res=> {
  //     console.log(res);
  //     console.log(res.data);
  //   })

  // dispatch(addFilmValues(genreValues));
  }

  let foreignNameHandler = (e: any) => {
    let reg = /[а-яА-ЯёЁ]/g;
    if (e.target.value.search(reg) !=  -1) {
        e.target.value  =  e.target.value.replace(reg, '');
    }
    setEnName(e.target.value)
  }
  
  return(
      <div className="container">
        <section className={style.header}>
          <BreadCrumbs 
            pathList={[{pathLink: '/admin', pathName: 'Администратор'}]} 
            slug={'Жанр'} /> 
        </section>
        <section className={style.main}>
          <h2 className={style.title}>{titleName}</h2>
          <div className={style.form}>
          <label className={style.label} data-id='name'>
            Название:
            <input placeholder="Введите название" className={style.inputs} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='enName'>
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
      </div>
  )
}

export default EditGenre;