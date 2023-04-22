import { FC } from "react";
import Layout from '@/components/layout/Layout';
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './Admin.module.scss';
import { filmographyData } from "@/components/ui/filmography/filmography.data";
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem";
import Image from 'next/image';
import trashImg from '../../../../public/trash.svg';

const Admin: FC = () => {

  let catalog: IFilmographyItem[] = [...filmographyData];

  console.log(catalog);
  

  return(
    <Layout title={'Панель администратора'}>
      <main className="container">
        <section className={style.header}>
          <BreadCrumbs 
            pathList={[{pathLink: '/', pathName: 'Мой Иви'}]} 
            slug={'Администратор'} /> 
        </section>
        <section className={style.main}>
          <h2 className={style.title}>Управление каталогом</h2>
          <h3 className={style.subTitle}>Список фильмов</h3>
          <ul className={style.list}>
          {catalog.map((item)=> {
            return <li key={item.filmId} className={style.item}>
                <h4 className={style.itemTitle}>{item.name}</h4>
                <button className={style.actionBtn} onClick={()=>{}}>
                  <p data-id={item.filmId}>Редактировать</p>
                </button>
                <button className={style.actionBtn} onClick={()=>{}}>
                  <Image src={trashImg} data-id={item.filmId} alt="Значок очистки"/>
                </button>
              </li>
          })}
        </ul>
          <button className={style.actionBtn}>
            Добавить
          </button>
        </section>
      </main>
    </Layout>
  )
}

export default Admin;