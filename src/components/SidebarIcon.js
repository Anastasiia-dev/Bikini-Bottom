import React from "react";
import "./SidebarIcon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SidebarIcon(){
    return(
        <>
        <button className="btn-menu"><FontAwesomeIcon icon="bars" size="2x" /></button>
        </>
    )
}

export default SidebarIcon;

