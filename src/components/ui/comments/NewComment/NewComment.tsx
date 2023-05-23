import { MainButton } from '../../button/MainBtn/MainButton'
import styles from '../comments.module.sass'
interface IProps{
    parentId: null | number,
    title: string,
    close?: any
}
export const NewComment:React.FC<IProps> = ({parentId, title, close}) => {
    return (
        <div className={styles.newComment}>
            <h2 className={styles.subtitle}>{title}</h2>
            <div className={styles.newComment__form}>
                <textarea name="message" placeholder='Your message' className={styles.newComment__textarea} rows={5}></textarea>
                <div onClick={() => close(false)}><MainButton text='Оставить комментарий' /></div>
            </div>
        </div>
    )
}