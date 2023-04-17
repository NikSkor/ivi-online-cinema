import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../comments.module.sass'
import like from '../icons/like.svg'

export const CommentsItem = () => {
    const [toAnswer, setToAnswer] = useState(false);
    return (
        <li className={styles.comments__item}>
            <h3 className={styles.comments__name}>Name</h3>
            <p className={styles.comments__text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem corrupti provident voluptate, repellendus enim non maiores repellat sunt aut aperiam vel
                blanditiis nemo vero reprehenderit quae, nam, nihil recusandae voluptatibus?Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Quidem corrupti provident voluptate, repellendus enim non
                maiores repellat sunt aut aperiam vel blanditiis nemo vero reprehenderit quae, nam, nihil recusandae
                voluptatibus?
            </p>
            <div className={styles.comments__bottomBlock}>
                <div className={styles.comments__toAnswer} onClick={() => setToAnswer(!toAnswer)}>{
                    toAnswer ? 'Закрыть' : 'Ответить'
                }</div>
                <div className={styles.comments__likes}>
                    <Image src={like} alt='actor' width={15} height={15} />16</div>
            </div>
            {
                toAnswer ? <div className={styles.newComment__form}>
                    <input type="text" placeholder='Name' className={styles.newComment__name} />
                    <textarea name="message" placeholder='Your message' className={styles.newComment__textarea} rows={5}></textarea>
                    <button className={styles.newComment__btn} onClick={() => setToAnswer(false)}>Ответить на комментарий</button>
                </div> : null
            }
        </li>
    )
}
