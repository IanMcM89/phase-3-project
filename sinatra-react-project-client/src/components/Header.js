import React from "react";
import Dashboard from "./Dashboard";
import "../css/Header.css";

function Header({ resetRecipes }) {
    return (
      <div id="app-header">
        <Dashboard resetRecipes={resetRecipes}/>
      </div>
    );
  }

export default Header;