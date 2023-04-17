import { CommentsItem } from './CommentsItem/CommentsItem'
import styles from './comments.module.sass'
import { NewComment } from './NewComment/NewComment'

export const Comments = () => {
    return (
        <>
            <h2 className={styles.subtitle}>Комментарии</h2>
            <ul className={styles.comments__list}>
                <CommentsItem />
                <CommentsItem />
            </ul>
            <NewComment />
        </>
    )
}
