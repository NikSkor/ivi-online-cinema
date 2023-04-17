import React from 'react'
import Image from 'next/image'
import styles from './comments.module.sass'
import like from './icons/like.svg'

export const Comments = () => {
    return (
        <>
            <h2 className={styles.subtitle}>Комментарии</h2>
            <ul className={styles.comments__list}>
                <li className={styles.comments__item}>
                    <h3 className={styles.comments__name}>Name</h3>
                    <p className={styles.comments__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem corrupti provident voluptate, repellendus enim non maiores repellat sunt aut aperiam vel blanditiis nemo vero reprehenderit quae, nam, nihil recusandae voluptatibus?</p>
                    <div className={styles.comments__likes}><Image src={like} alt='actor' width={15} height={15} />16</div>
                </li>
                <li className={styles.comments__item}>
                    <h3 className={styles.comments__name}>Name</h3>
                    <p className={styles.comments__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem corrupti provident voluptate, repellendus enim non maiores repellat sunt aut aperiam vel blanditiis nemo vero reprehenderit quae, nam, nihil recusandae voluptatibus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem corrupti provident voluptate, repellendus enim non maiores repellat sunt aut aperiam vel blanditiis nemo vero reprehenderit quae, nam, nihil recusandae voluptatibus?</p>
                    <div className={styles.comments__likes}><Image src={like} alt='actor' width={15} height={15} />16</div>
                </li>

            </ul>
            <div>
            <h2 className={styles.subtitle}>Оставить комментарий</h2>
            <div className={styles.newComment}>
                <input type="text" placeholder='Name' className={styles.newComment__name} />
                <textarea name="message" placeholder='Your message' className={styles.newComment__textarea} rows={5}></textarea>
                <button className={styles.newComment__btn}>Оставить комментарий</button>
            </div>
            </div>
        </>
    )
}
