import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditGenre.module.scss';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import axios from "axios";
import MessageModal from "@/components/screens/admin/MessageModal/MessageModal";
import { API_URL_PATCH_GENRES } from "../API/const";


interface IGenreItem {
  id: number,
  name: string,
  enName: string,
}

interface IGenres {
  genreId: number,
  name: string,
  enname: null|string
} 

const EditGenre: FC = () => {

  const id: number = useAppSelector(state => state.admin.genreId);
  const genresCatalog: IGenres[] = useAppSelector(state => state.admin.genres);
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
        enName: item.enname !== null ? item.enname : ''
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

  const headers = {
    'Content-type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MjUxNjIzOTAyMiwiaXNBZG1pbiI6dHJ1ZX0.f1EOoLCXMQPDGD0s9QaO5tkWTsH77lDXpNdAgp_Q-1s'
  }

  try {
  const response = await axios.patch(`${API_URL_PATCH_GENRES}${id}`, data, {
    headers: headers
  });
  console.log('Returned data:', response);
  setModalMessage(`Жанр "${genreItem.name}" обновлён.`);
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
        <MessageModal active={modalActive} setActive={setModalActive} link={'/admin'} message={modalMessage}/>
      </div>
  )
}

export default EditGenre;