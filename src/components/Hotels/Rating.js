import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";

function Rating(){ 
    const stars = new Array(5).fill(null);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const getOnClickHandler = ratingValue => () => setRating(ratingValue);
    const getOnMouseEnter = ratingValue => () => setHover(ratingValue);
    const getOnMouseLeave = () => () => setHover(null);
    


    return(
          <div className="star-rating">
            
            {stars.map((star, i) => {
             const ratingValue = i + 1;
             
              return(
                <label key={i}>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue}
                        onClick={getOnClickHandler(ratingValue)}
                        
                    />
                    <FontAwesomeIcon
                        icon="star"
                        size="1x"
                        color={ratingValue <= (hover || rating) ? "rgb(253, 175, 201)" : "rgb(185, 125, 144)"}
                        className="stars" 
                        onMouseEnter={getOnMouseEnter(ratingValue)}
                        onMouseLeave={getOnMouseLeave(null)}
                    />
                </label>)
            } )}
          </div>
    )


    
        
}

export default Rating;