import React from "react";
import "./Card.css";
import Carousel from "./Carousel";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Card(){

    return(
        <>
        <div className="hotels-container">

        <div className="hotel-card">
          <div>
            <Carousel />
          </div>

          <div className="hotel-info">
             <div className="hotel-links">
              <Link 
                  to="#"  
                  className="hotel-name"
              >Patrick's house</Link>
              <Rating /> 
            </div>
            <p className="hotel-adress">120 Conch Street, Bikini Bottom, Pacific Ocean</p>
          
            
          
            <div className="hotel-amenities">
              <div className="amenities-items"><FontAwesomeIcon icon="bed" size="1x" color="yellow"/>
              <p>1 double bed</p></div>
              <div className="amenities-items"><FontAwesomeIcon icon="users" size="1x" color="yellow"/>
              <p>2 guests</p></div>
              <div className="amenities-items"><FontAwesomeIcon icon="bath" size="1x" color="yellow"/>
              <p>1 bathroom</p></div>
              <div className="amenities-items"><FontAwesomeIcon icon="paw" size="1x" color="yellow"/>
              <p>pet friendly</p></div>
              <div className="amenities-items"><FontAwesomeIcon icon="wifi" size="1x" color="yellow"/>
              <p>Wi-Fi</p></div>
           </div>
          </div>
        </div>
        
      </div>
      </>
    )
}

export default Card;
