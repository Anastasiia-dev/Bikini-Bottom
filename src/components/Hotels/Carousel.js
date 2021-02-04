import React, { Component } from "react";
import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";


const images = [
      {
        id: 1,
        src: "./components/Hotels/img/patrickshouse.png"
      },
      {
        id: 2,
        src: "./img/patFace.png"
      }
    ]


class Carousel extends Component{

  render(){
    
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    }

    return(
      <div className="carousel">
        <Slider {...settings}>
          {images.map(image => 
                <img key={image.id} scr={image.src} alt=""/> 
          )}
        </Slider>
      </div>
    )
  }
}

export default Carousel;
