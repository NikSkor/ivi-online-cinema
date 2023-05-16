import { CommentsItem } from './CommentsItem/CommentsItem'
import styles from './comments.module.sass'
import { NewComment } from './NewComment/NewComment'
import { IComments } from '@/components/screens/film/film.data'
interface IProps {
    comments: IComments[]
}
export const Comments = ({ comments }: IProps) => {
    return (
        <>
            <h2 className={styles.subtitle}>Комментарии</h2>
            <ul className={styles.comments__list}>
                {
                    comments.length ? comments.map((item, i) => { return <div key={i}>{item.value}</div> }) : <h2 className={styles.comments__not}>Нет комментариев 😔</h2>
                }
{/*                 <CommentsItem />
                <CommentsItem /> */}
            </ul>
            <NewComment />
        </>
    )
}
