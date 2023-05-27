import { FC } from "react";

import CrudBlock from "./CrudBlock/CrudBlock";
import Image from "next/image";
import style from './CrudList.module.scss';
import trashImg from '../../../../../public/trash.svg';
import { IFilms, IGenres } from '@/components/screens/admin/interfaces/interfaces';
import Preloader from "@/components/screens/admin/Preloader/Preloader";

interface ICrudList {
  catalog: IGenres[]| IFilms[],
  adress: string,
  isLoaded: boolean,
  children?: React.ReactNode
}

const CrudList: FC<ICrudList> = ({catalog, adress, isLoaded, children}) => {

  return (
    <ul className={style.list}>
      {!isLoaded && <Preloader/>}
      {
        catalog.map((item)=> {
          if('genreId' in item) {
            return (
              <CrudBlock 
                key={item.genreId} 
                item={{
                  id: item.genreId,
                  name: item.name,
                  enName: item.enName
                }}
                adress={adress}>
                <Image src={trashImg} data-id={item.genreId} alt="Значок очистки"/>
              </CrudBlock>
            )
          }
          if('movieId' in item) {
            return (
              <CrudBlock 
                key={item.movieId} 
                item={{
                  id: item.movieId,
                  name: item.name,
                  enName: item.enName
                }}  
                adress={adress}>
                <Image src={trashImg} data-id={item.movieId} alt="Значок очистки"/>
              </CrudBlock>
            )
          }
        }) 
      }
      {children}
    </ul>
  )
}

export default CrudList;