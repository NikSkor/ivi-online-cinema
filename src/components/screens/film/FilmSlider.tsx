import React from 'react'
import { FilmItemSlider } from '@/components/ui/filmItemSlider/FilmItemSlider';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const FilmSlider = () => {
    function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className}` }
            style={{...style, top: '45%' }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, top: '45%' }}
            onClick={onClick}
          />
        );
      }
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 9,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />
            <FilmItemSlider />

        </Slider>
    )
}
