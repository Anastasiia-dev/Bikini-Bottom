import React from "react";
import "./SidebarIcon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SidebarIcon(){
    return(
        <div>
        <button className="btn-menu"><FontAwesomeIcon icon="bars" size="2x" /></button>
        </div>
    )
}

export default SidebarIcon;

