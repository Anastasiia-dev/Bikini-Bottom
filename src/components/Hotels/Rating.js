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
              return(
                <label>
                    <input 
                        type="radio" 
                        name="rating" 
                        key={i}
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        
                    />
                    <FontAwesomeIcon
                        key={i}
                        icon="star"
                        size="2x"
                        color={ratingValue <= (hover || rating) ? "yellow" : "rgb(190, 190, 146)"}
                        className="stars" 
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>)
            } )}
            <p>The rating is {rating}.</p>
          </div>
    )


    
        
}

export default Rating;