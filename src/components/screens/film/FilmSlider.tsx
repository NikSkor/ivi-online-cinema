import React from 'react'
import { FilmItemSlider } from '@/components/ui/filmItemSlider/FilmItemSlider';
import Slider from 'react-slick';
import styles from './film.module.sass';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ISimilarFilms } from './film.data';

export const FilmSlider = ({similarMovies}: ISimilarFilms) => {
    function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className}` }
            style={{...style, top: '40%' }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, top: '40%' }}
            onClick={onClick}
          />
        );
      }
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Slider {...sliderSettings}>
          {
            similarMovies.map(item => {return <FilmItemSlider key={item.movie2.movieId} film={item.movie2} />})
          }
        </Slider>
    )
}
