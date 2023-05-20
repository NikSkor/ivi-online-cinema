import Slider from 'react-slick'
import styles from './WeeklyTop.module.scss'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const WeeklyTop = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: width > 1160 ? 5 : width > 880 ? 4 : width > 600 ? 3 : 2,
    slidesToShow: 5,
    slidesToScroll: 3
  };






  const posters = [
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage6/contents/e/0/08c76a2df45108ec28af6300cc5b93.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage4/contents/b/3/826ab6a9a975f9919837f0d17ba642.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage15/contents/2/2/b73c42810f30fbd1a5fe65d2bebc38.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/2/c/9f939aecb764dffa13d065ebf93208.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage26/contents/a/1/56b0cedeb8dd5890ee46ab947c1207.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage2/contents/5/0/5a82ac6f5942eeea490540feca0a62.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/d/e/f3afc43a0709ea1ebf35cdf142cc46.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/e/14ad136916cb3797041ef18a0b6149.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage28/contents/f/2/7e50d51661b729863f8584ee559242.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/b/6/356258bbe7c5ba5b5b40251be3d48f.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/9/09f0b7761bcd8ceb9c42bb93f4806c.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage28/contents/e/e/2b49a5aa4d8ab07304588192853bee.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage4/contents/2/c/3b8e2a957b926355725e1237e188bf.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/7/a/f1fdf81472f76cc5950e0f4ef30060.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/9/f92d6d3965cfcb7b7e1878eaa56f05.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/0/86ca0a529c83b35c0b0f2b29a0fa57.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/0/7/c29756fa4d94a6ba334836e7820b3a.png/x200/?q=85'
    },
    {
      poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/b/2/661be4b1a65157bb5440ffc3bbeb06.jpg/304x620//?q=85',
      logo: 'https://thumbs.dfs.ivi.ru/storage28/contents/4/8/c0919a0f0fce59bcaaa0ca5dea3dec.png/x200/?q=85'
    }

  ]
  const locale = useRouter().locale

  return (
    <div className={styles.weeklyTop}>
      <div className={styles.title}>
        <Image src="/top10.svg" width={116} height={50} alt="top" />
        <span>{locale === 'ru' ? 'за неделю' : 'of the week'}</span>
      </div>
      <div className={styles.carousel}>
      <Slider {...settings}>
        {
          posters.map((element, index) =>
            <div key={index} className={styles.poster}>
              <div className={styles.imageWrapper}>
                <img src={element.poster} width={214} alt="q" />
                <div className={styles.imageLogoArea}>
                  <img src={element.logo} alt="" />
                </div>
                <div className={styles.imageFade}></div>
                <div className={styles.imageFadeFooter}></div>
                {index + 1 === 1 &&
                  <div className={styles.number}>
                    <img src='numbers/number1.svg' />
                  </div>
                }
                {index + 1 === 2 &&
                  <div className={styles.number}>
                    <img src='numbers/number2.svg' />
                  </div>
                }
                {index + 1 === 3 &&
                  <div className={styles.number}>
                    <img src='numbers/number3.svg' />
                  </div>
                }
                {index + 1 === 4 &&
                  <div className={styles.number}>
                    <img src='numbers/number4.svg' />
                  </div>
                }
                {index + 1 === 5 &&
                  <div className={styles.number}>
                    <img src='numbers/number5.svg' />
                  </div>
                }
                {index + 1 === 6 &&
                  <div className={styles.number}>
                    <img src='numbers/number6.svg' />
                  </div>
                }
                {index + 1 === 7 &&
                  <div className={styles.number}>
                    <img src='numbers/number7.svg' />
                  </div>
                }
                {index + 1 === 8 &&
                  <div className={styles.number}>
                    <img src='numbers/number8.svg' />
                  </div>
                }
                {index + 1 === 9 &&
                  <div className={styles.number}>
                    <img src='numbers/number9.svg' />
                  </div>
                }
                {index + 1 === 10 &&
                  <div className={styles.number}>
                    <img src="numbers/number1.svg" alt="" />
                    <img src="numbers/number10.svg" alt="" />
                  </div>}
              </div>
            </div>
          )
        }
      </Slider>
      </div>
    </div>
  )
}

export default WeeklyTop