import { useRouter } from 'next/router'
import { MainButton } from '../../button/MainBtn/MainButton'
import styles from '../comments.module.sass'
import { useState } from 'react';
interface IProps {
    parentId: null | number,
    title: string,
    close?: any
}
export const NewComment: React.FC<IProps> = ({ parentId, title, close }) => {
    const locale = useRouter().locale
    const [comment, setComment] = useState('')
    const token = localStorage.getItem('token')
    const movieId = useRouter().query.id
    console.log(parentId)
    function changeTextComment(text: string) {
        setComment(text);
    }

    function addNewComment() {
        if (comment.length < 5) return alert('Слишком короткое сообщение')
        createComment(comment).then(() => {
            close(false)
            alert('Ваш комментарий оставлен')
        });
    }

    const createComment = async (value: string) => {
        const response = await fetch(`http://localhost:5000/api/movie/add-comment/${movieId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                parentId: parentId === null ? null : parentId,
                value: value
            }),
        });

        const data = await response.json();
        return data.id;
    };
    return (
        <div className={styles.newComment}>
            <h2 className={styles.subtitle}>{title}</h2>
            <div className={styles.newComment__form}>
                <textarea name="message" placeholder={locale === 'ru' ? 'Ваш комментарий' : 'Your comment text'} className={styles.newComment__textarea} rows={5} onChange={(e) => changeTextComment(e.target.value)}></textarea>
                <div onClick={addNewComment}><MainButton text={locale === 'ru' ? 'Оставить новый комментарий' : 'Add the comment'} /></div>
            </div>
        </div>
    )
}