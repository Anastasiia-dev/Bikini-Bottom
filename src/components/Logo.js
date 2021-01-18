import React from "react";
import logo from "../img/logoBB.png";
import "./Logo.css";

function Logo(){
    return(
    <div className="logo">
       <img src={logo} alt="logo" width="100px"/>
    </div>
    )
    
       
}

export default Logo;