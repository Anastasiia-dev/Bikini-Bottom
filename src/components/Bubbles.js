import React from "react";
import bubble from "../img/bubble.png";
import "./Bubbles.css";


function Bubbles(){

    const images = new Array(12).fill(null);

    return(
        <div className="bubbles">
            {images.map(() => <img src={bubble} alt="bubble"/>)};
        </div>
    )
}

export default Bubbles;