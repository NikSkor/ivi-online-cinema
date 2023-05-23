import { FC, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditGenre.module.scss';
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import axios from "axios";
import MessageModal from "@/components/screens/admin/MessageModal/MessageModal";
import { API_URL_PATCH_GENRES } from "../API/const";
import { IGenreItem, IGenres } from "../interfaces/interfaces";

const EditGenre: FC = () => {

  const id: number = useAppSelector(state => state.admin.genreId);
  const genresCatalog: IGenres[] = useAppSelector(state => state.admin.genres);
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  let genreItem: IGenreItem = {
    id: 0,
    name: '',
    enName: '',
  }

  
  if (id !== undefined) {
    genresCatalog.forEach((item) => {
    if (item.genreId === +id) {
      genreItem = {
        id: item.genreId,
        name: item.name,
        enName: item.enName !== null ? item.enName : ''
      }
    }
  })
  }

  const titleName = genreItem.name.slice();

  let [name, setName] = useState(genreItem.name);
  let [enName, setEnName] = useState(genreItem.enName);
  let [isValidName, setIsValidName] = useState(true);

  let resetHandler = (e: any) => {
    e.preventDefault();

    setName(genreItem.name);
    setEnName(genreItem.enName);
  }

  let submitHandler = async (e: any) => {
    e.preventDefault();

    if (name === '') {
      setIsValidName(false);
      setModalActive(true);
    } else {
      let genreValues: IGenreItem = {
        id: id,
        name: name,
        enName: enName
      }

      let data = JSON.stringify(genreValues); 

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
        {isValidName && <MessageModal active={modalActive} setActive={setModalActive} link={'/admin'} message={modalMessage}/>}
        {!isValidName && <MessageModal active={modalActive} setActive={setModalActive} message={'Не запонено название !'} setValidateName={setIsValidName}/>}
      </div>
  )
}

export default EditGenre;