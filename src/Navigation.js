import React from "react";
import "./Navigation.css";
import chartIcon from "./images/Chart.svg";
import discoveryIcon from "./images/Discovery.svg";
import profileIcon from "./images/Profile.svg";
function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__Links">
        <a>
        <li>
          <h4>Home</h4>
        </li>
            
        </a>
        <a>
        <li>
          <img src={discoveryIcon} alt="" />
        </li>

        </a>
        <li>
          <img src={chartIcon} alt="" />
        </li>
        <li>
          <img src={profileIcon} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
