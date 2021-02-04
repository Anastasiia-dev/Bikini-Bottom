import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";

function Rating(){ 
    const stars = new Array(5).fill(null);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    


    return(
          <div className="star-rating">
            
            {stars.map((star, i) => {
             const ratingValue = i + 1;
             const onClickHandler = () => setRating(ratingValue);
              return(
                <label>
                    <input 
                        type="radio" 
                        name="rating" 
                        key={i}
                        value={ratingValue}
                        onClick={onClickHandler}
                        
                    />
                    <FontAwesomeIcon
                        key={i}
                        icon="star"
                        size="1x"
                        color={ratingValue <= (hover || rating) ? "rgb(253, 175, 201)" : "rgb(185, 125, 144)"}
                        className="stars" 
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>)
            } )}
          </div>
    )


    
        
}

export default Rating;