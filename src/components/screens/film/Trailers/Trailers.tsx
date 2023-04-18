import React from 'react'
import Image from 'next/image';
import styles from './trailers.module.sass';
export const Trailers = () => {
    const bgImage = "https://thumbs.dfs.ivi.ru/storage38/contents/9/2/1da99afee8d958162fbb8faad3a24b.jpg";

    return (
        <div className={styles.trailersSection__item}>
            <div className={styles.trailersSection__image}>
                <Image loader={() => bgImage} src={bgImage} alt='trailer' width={286} height={160} />
            </div>
            <h4 className={styles.trailersSection__name}>Трейлер</h4>
            <h4 className={styles.trailersSection__duration}>104 мин.</h4>
        </div>
    )
}
