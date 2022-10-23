import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Productlist.css';
import Dataitems from './Dataitems';

const Productlist = () => {
const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
    <Slider {...settings}>
      {Dataitems.map((item) => (
        <div className="card">
          <div className="card-top">
            <img
              src={
                defaultImage[item.title] === item.title
                  ? defaultImage.linkDefault
                  : item.linkImg
              }
              alt={item.title}
            />
            <h1>{item.title}</h1>
          </div>
          <div className="card-bottom">
            <h3>{item.price}</h3>
            <span className="category">{item.category}</span>
          </div>
        </div>
      ))}
    </Slider>
    </div>

  )
}

export default Productlist