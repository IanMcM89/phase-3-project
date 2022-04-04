import React from "react";
import { useHistory } from 'react-router-dom';
import "../css/Header.css";

function Header() {
  const history = useHistory();

  //On button click, redirect path and reset recipes:
  function handleClick(e) {
    history.push(e.target.textContent.includes("Home") ? "/" : `/${(e.target.textContent).toLowerCase()}`);
  }

  return (
    <header>
      <div id="header__buttons">
        <button onClick={handleClick}>Home</button>
        <button onClick={handleClick}>Categories</button>
        <button onClick={handleClick}>Recipes</button>
        <button onClick={handleClick}>Create</button>
      </div>
    </header>
  );
}

export default Header;