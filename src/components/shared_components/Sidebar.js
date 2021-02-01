import React, { useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import logo from "./img/logoBB.png";


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="sidebar-container">
        <Link to="#">
          <FontAwesomeIcon
            onClick={showSidebar}
            icon="bars"
            size="2x"
            color="yellow"
            className="icon-open"
          />
        </Link>
        <img className="logo" src={logo} alt="logo" width="100px" />
        <nav className={sidebar ? "menu active" : "menu"}>
          <ul className="sidebar-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="sidebar-icon">
                <FontAwesomeIcon icon="times" size="2x" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
