import React from "react";
import "../css/Header.css";

function Header() {
    return (
      <div id="app-header">
        <div className="header-title">
            <img src="./images/icons/menu-icon.png" alt="Menu Icon"/>
            <h1>My Recipes</h1>
        </div>
      </div>
    );
  }

export default Header;