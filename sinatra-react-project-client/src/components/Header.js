import React from "react";
import { useHistory } from 'react-router-dom';
import "../css/Header.css";

function Header(props) {
  const history = useHistory();

  //On button click, redirect path, toggle search bar and reset recipes:
  function handleClick(e) {
    history.push(`/${(e.target.textContent).toLowerCase()}`);
    props.resetRecipes();
  }

  return (
    <div id="app-header">
      <div id="header-buttons">
        {/* Dashboard buttons */}
        <button onClick={handleClick}>Home</button>
        <button onClick={handleClick}>Categories</button>
        <button onClick={handleClick}>Recipes</button>
        <button onClick={handleClick}>Create</button>
      </div>
    </div>
  );
}

export default Header;