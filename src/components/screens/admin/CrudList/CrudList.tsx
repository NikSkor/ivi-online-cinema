import { FC } from "react";
import CrudBlock from "@/components/screens/admin/CrudList/CrudBlock/CrudBlock";
import style from './CrudList.module.scss';
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