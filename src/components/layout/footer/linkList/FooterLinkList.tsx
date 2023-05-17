import { IFooterLinkList } from "@/interfaces/footer/IFooterLinkList"
import { FC } from "react"
import style from './FooterLinkList.module.scss'
import { useRouter } from "next/router"

const FooterLinkList: FC<IFooterLinkList> = ({title, enTitle, links}) => {

  const locale = useRouter().locale
  return (
    <>
      <span className={style.column__title}>{locale === 'ru' ? title : enTitle}</span>
      <ul className={style.footer__linkList}>
        {
          links.map((item) => (
            <li key={item.url} className={style.footer__linkItem}>
              <a className={style.footer__link} href={item.url}>{locale === 'ru' ? item.content : item.enContent}</a>
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default FooterLinkList