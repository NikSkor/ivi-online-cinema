import React from 'react'
import { FilmItemSlider } from '@/components/ui/filmItemSlider/FilmItemSlider';
import Slider from 'react-slick';
import styles from './film.module.sass';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ISimilarFilms } from './film.data';

export const FilmSlider = ({ similarMovies }: ISimilarFilms) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style, top: '40%' }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props: any) {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }

  return (
    <Slider {...sliderSettings}>
      {
        similarMovies.map(item => { return <FilmItemSlider key={item.movie2.movieId} film={item.movie2} /> })
      }
    </Slider>
  )
}
