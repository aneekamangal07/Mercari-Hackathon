import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoCarousel = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="carousel-slide">
            <img src={photo.url} alt={photo.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
