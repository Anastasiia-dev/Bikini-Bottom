import React, { Component } from "react";
import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import PatrickHouse from "./patrickshouse.png";
import PatrickRoom from "./ratricksroom.png"

const images = [
      {
        id: 1,
        src: PatrickHouse,
      },
      {
        id: 2,
        src: PatrickRoom
      }
    ]


class Carousel extends Component{

  render(){
    
    const settings = {
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
                <img key={image.id} src={image.src} alt=""/> 
          )}
        </Slider>
      </div>
    )
  }
}

export default Carousel;
