import { FC, useEffect, useState } from "react";
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import style from './EditMovie.module.scss';
import { IFilmographyItem } from "@/interfaces/person/IFilmographyItem";
import { filmographyData } from "@/components/ui/filmography/filmography.data";

interface IFilmId {
  id: string | undefined
}

const EditMovie: FC<IFilmId> = ({id}) => {

  // let [isError, setIsError] = useState(false);

  let [idNum, setIdNum] = useState(0);

  

  let [name, setName] = useState('');
  let [urlImg, setUrlImg] = useState('');
  let [year, setYear] = useState(0);
  let [rating, setRating] = useState(0);

  useEffect(()=> {
    if (id !== undefined) {
    setIdNum(+id);
      catalog.forEach((item) => {
      if (item.filmId === idNum) {
        setName(item.name);
        setUrlImg(item.posterURL);
        setYear(item.year);
        setRating(item.rating);
        console.log('zuzu');
      }
    })
    }
  }, [id]);
  

  let catalog: IFilmographyItem[] = [...filmographyData];


  // if(typeof id !== 'undefined') {
    // catalog.forEach((item) => {
    //   if (item.filmId === idNum) {
    //     // setName(item.name);
    //     // setUrlImg(item.posterURL);
    //     // setYear(item.year);
    //     // setRating(item.rating);
    //     console.log('zuzu');
    //   }
    // })
  // }

  // console.log(name);
  


  
  return(
      <div className="container">
        <section className={style.header}>
          <BreadCrumbs 
            pathList={[{pathLink: '/admin/', pathName: 'Администратор'}]} 
            slug={'Фильм'} /> 
        </section>
        <section className={style.main}>
          <h2 className={style.title}>{name}</h2>
          <h3 className={style.subTitle}>{idNum}</h3>
        </section>
      </div>
  )
}

export default EditMovie;