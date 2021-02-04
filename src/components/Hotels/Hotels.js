import React from "react";
import "./Hotels.css";
import Card from "./Card"



function Hotels(){
    return(
      <>
      <h1 className="hotels-title">Hotels</h1>

      <div className="hotels-box">
        <Card />
        <Card />
        <Card />
        <Card />
      
      </div>

      </>
      
  )
}

export default Hotels;