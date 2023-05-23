import React from 'react'
import { CommentsItem } from './CommentsItem/CommentsItem'
import styles from './comments.module.sass'
import { NewComment } from './NewComment/NewComment'
import { IComments } from '@/components/screens/film/film.data'
import { MainButton } from '../button/MainBtn/MainButton'
import { Router, useRouter } from "next/router"
import { useAppSelector } from '@/store/hooks'
interface IProps {
    comments: IComments[]
}
export const Comments = ({ comments }: IProps) => {
    const locale = useRouter().locale
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const [showNewComment, setShowNewComment] = React.useState(false)
    function handleNewComment() {
        if (isAuth) {
            setShowNewComment(true)
        } else {
            alert(locale === 'ru' ? 'Чтобы оставить комментарий необходимо войти' : 'To write a comment, you need to log in')
        }
    }
    return (
        <>
            <h2 className={styles.subtitle}>{locale === 'ru' ? 'Комментарии' : 'Comments'}</h2>
            <div className={styles.comments__list}>
                {
                    comments.length ? comments.map((item) => <CommentsItem key={item.commentId} item={item} />) : <h2 className={styles.comments__not}>{locale === 'ru' ? 'Нет комментариев 😔' : 'No comments 😔'}Нет комментариев 😔</h2>
                }
            </div>
            {
                !showNewComment ?
                    <div className={styles.newComment__btn} onClick={handleNewComment}>
                        <MainButton text={locale === 'ru' ? 'Оставить комментарий' : 'Write a comment'}  />
                    </div> : <NewComment title={locale === 'ru' ? 'Оставить новый комментарий' : 'Write a new comment'} parentId={null} close={setShowNewComment} />
            }


        </>
    )
}
