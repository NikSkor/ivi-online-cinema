import { FC } from "react";
import style from './EditBlock.module.scss';
import { useRouter } from "next/router";


interface IRedact {
  titleName: string,
  name: string,
  enName: string,
  getName: Function,
  getEnName: Function,
  children: React.ReactNode
}

const EditBlock: FC<IRedact> = ({titleName, name, enName, getName, getEnName, children}) => {

  const locale = useRouter().locale;

  const nameHandler = (e: any) => {
    let reg = /[a-zA-Z]/g;
      if (e.target.value.search(reg) !=  -1) {
          e.target.value  =  e.target.value.replace(reg, '');
      }
    getName(e.target.value)
    }

  const foreignNameHandler = (e: any) => {
    let reg = /[а-яА-ЯёЁ]/g;
    if (e.target.value.search(reg) !=  -1) {
        e.target.value  =  e.target.value.replace(reg, '');
    }
    getEnName(e.target.value)
    }
  
  return(

        <section className={style.main}>
          <h2 className={style.title}>{titleName}</h2>
          <div className={style.form}>
          {locale === 'ru'
            ? 
            <>
              <label 
                className={style.label} 
                >
                  Название:
                <input 
                  placeholder="Введите название" 
                  className={style.inputs} 
                  type='text' 
                  value={name} 
                  onChange={(e) => {nameHandler(e)}}
                />
              </label>
              <label 
                className={style.label} 
                >
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
                >
                  Title:
                <input 
                  placeholder="Enter the title" 
                  className={style.inputs} 
                  type='text' 
                  value={name} 
                  onChange={(e) => {nameHandler(e)}}
                />
              </label>
              <label 
                className={style.label} 
                >
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
          {children}
        </section>

  )
}

export default EditBlock;