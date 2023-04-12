import { IFooterLinkList } from "@/interfaces/footer/IFooterLinkList"
import { FC } from "react"
import style from './FooterLinkList.module.scss'

const FooterLinkList: FC<IFooterLinkList> = ({title, links}) => {
  return (
    <>
      <span className={style.column__title}>{title}</span>
      <ul className={style.footer__linkList}>
        {
          links.map((item) => (
            <li key={item.url} className={style.footer__linkItem}>
              <a className={style.footer__link} href={item.url}>{item.content}</a>
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default FooterLinkList