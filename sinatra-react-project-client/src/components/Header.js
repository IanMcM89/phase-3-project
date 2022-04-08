import React from "react";
import { useHistory } from 'react-router-dom';
import "../css/Header.css";

function Header({ resetRecipes }) {

  const history = useHistory();

  //On button click, redirect path and reset recipes:
  const handleClick = e => {
    if (e.target.textContent.includes("Home")) {
      history.push("/"); 
    } else {
      history.push(`/${(e.target.textContent).toLowerCase()}`);
    }
    return resetRecipes();
  }

  return (
    <header>
      <div className="header-buttons">
        <button onClick={handleClick}>Home</button>
        <button onClick={handleClick}>Categories</button>
        <button onClick={handleClick}>Recipes</button>
        <button onClick={handleClick}>Create</button>
      </div>
    </header>
  );
}

export default Header;