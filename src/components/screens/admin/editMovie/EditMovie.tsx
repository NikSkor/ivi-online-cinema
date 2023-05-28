import { FC, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditMovie.module.scss';
import { useAppSelector } from "@/store/hooks";
import MessageModal from "@/components/screens/admin/MessageModal/MessageModal";
import axios from "axios";
import { API_URL_PATCH_MOVIES } from "../API/const";
import { IFilmItem, IFilms } from "../interfaces/interfaces";
import { TOKEN } from "../API/token";
import { useRouter } from "next/router";
import EditBlock from "../editBlock/editBlock";

const EditMovie: FC = () => {
  const locale = useRouter().locale;
  const id: number = useAppSelector(state => state.admin.filmId);
  const filmsCatalog: IFilms[] = useAppSelector(state => state.admin.films);
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  let filmItem: IFilmItem = {
    id: 0,
    name: '',
    enName: ''
  }

  if (id !== undefined) {
    filmsCatalog.forEach((item) => {
    if (item.movieId === +id) {
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
  let [isValidName, setIsValidName] = useState(true);


  let resetHandler = (e: any) => {
    e.preventDefault();

    setName(filmItem.name);
    setEnName(filmItem.enName);
  }

  let submitHandler = async (e: any) => {
    e.preventDefault();

    if (name === '') {
      setIsValidName(false);
      setModalActive(true);
    } else {
      let filmValues: IFilmItem = {
        id: id,
        name: name,
        enName: enName,
      }

      let data = JSON.stringify(filmValues); 

      const headers = {
        'Content-type': 'application/json',
        'Authorization': TOKEN
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
  }


  // let foreignNameHandler = (e: any) => {
  //   let reg = /[а-яА-ЯёЁ]/g;
  //   if (e.target.value.search(reg) !=  -1) {
  //       e.target.value  =  e.target.value.replace(reg, '');
  //   }
  //   setEnName(e.target.value)
  // }

let titleName: string;
  locale !== 'ru' && filmItem.enName !== ''
    ? titleName = filmItem.enName.slice()
    : titleName = filmItem.name.slice();

  return(
      <div className="container">
        <section className={style.header}>
          {locale === 'ru'
          ? <BreadCrumbs 
          pathList={[{pathLink: '/admin', pathName: 'Администратор'}]} 
          slug={'Фильм'} /> 
          : <BreadCrumbs 
          pathList={[{pathLink: '/admin', pathName: 'Administrator'}]} 
          slug={'Film'} /> 
          }
        </section>
        <EditBlock
          titleName={titleName} 
          name={name} 
          enName={enName} 
          getName={setName} 
          getEnName={setEnName} 
        >
          {locale === 'ru'
          ? 
          <div className={style.btnBlock}>
            <button className={style.actionBtn} onClick={(e) => {resetHandler(e)}}>Сбросить</button>
            <button className={style.actionBtn} onClick={(e) => {submitHandler(e)}}>Сохранить</button>
            <button className={style.actionBtn} onClick={() => router.push('/admin')}>Назад</button>
          </div>
          :
          <div className={style.btnBlock}>
            <button className={style.actionBtn} onClick={(e) => {resetHandler(e)}}>Reset</button>
            <button className={style.actionBtn} onClick={(e) => {submitHandler(e)}}>Save</button>
            <button className={style.actionBtn} onClick={() => router.push('/admin')}>Back</button>
          </div>
          }
          {isValidName && <MessageModal active={modalActive} setActive={setModalActive} link={'/admin'} message={modalMessage}/>}
          {!isValidName && <MessageModal active={modalActive} setActive={setModalActive} message={'Не запонено название !'} setValidateName={setIsValidName}/>}
        </EditBlock>
        {/* <section className={style.main}>
          <h2 className={style.title}>{titleName}</h2>
          <div className={style.form}>
          {locale === 'ru'
            ? 
            <>
              <label 
                className={style.label} 
                data-id='name'>
                  Название:
                <input 
                  placeholder="Введите название" 
                  className={style.inputs} 
                  type='text' 
                  value={name} 
                  onChange={(e) => {setName(e.target.value)}}
                />
              </label>
              <label 
                className={style.label} 
                data-id='enName'>
                  Название на английском:
                <input 
                  placeholder="Введите английское название" 
                  className={style.inputs} 
                  type='text' 
                  value={enName} 
                  onChange={(e) => {foreignNameHandler(e)}}
                />
              </label>
            </>
            :
            <>
              <label 
                className={style.label} 
                data-id='name'>
                  Title:
                <input 
                  placeholder="Enter the title" 
                  className={style.inputs} 
                  type='text' 
                  value={name} 
                  onChange={(e) => {setName(e.target.value)}}
                />
              </label>
              <label 
                className={style.label} 
                data-id='enName'>
                  Title in English::
                <input 
                  placeholder="Enter English title" 
                  className={style.inputs} 
                  type='text' 
                  value={enName} 
                  onChange={(e) => {foreignNameHandler(e)}}
                />
              </label>
            </>
          }
          </div>
          {locale === 'ru'
          ? 
          <div className={style.btnBlock}>
            <button className={style.actionBtn} onClick={(e) => {resetHandler(e)}}>Сбросить</button>
            <button className={style.actionBtn} onClick={(e) => {submitHandler(e)}}>Сохранить</button>
            <button className={style.actionBtn} onClick={() => router.push('/admin')}>Назад</button>
          </div>
          :
          <div className={style.btnBlock}>
            <button className={style.actionBtn} onClick={(e) => {resetHandler(e)}}>Reset</button>
            <button className={style.actionBtn} onClick={(e) => {submitHandler(e)}}>Save</button>
            <button className={style.actionBtn} onClick={() => router.push('/admin')}>Back</button>
          </div>
          }
          {isValidName && <MessageModal active={modalActive} setActive={setModalActive} link={'/admin'} message={modalMessage}/>}
          {!isValidName && <MessageModal active={modalActive} setActive={setModalActive} message={'Не запонено название !'} setValidateName={setIsValidName}/>}
        </section> */}
      </div>
  )
}

export default EditMovie;