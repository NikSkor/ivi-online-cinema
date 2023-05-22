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
                    comments.length ? comments.map((item) => <CommentsItem key={item.commentId} item={item} /> ) : <h2 className={styles.comments__not}>Нет комментариев 😔</h2>
                }
{/*                 <CommentsItem />
                <CommentsItem /> */}
            </ul>
            <NewComment title={"Оставить новый комментарий"} parentId={null}/>
        </>
    )
}
