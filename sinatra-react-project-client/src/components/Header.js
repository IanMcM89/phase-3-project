import React from "react";
import { useHistory } from 'react-router-dom';
import "../css/Header.css";

function Header({ resetRecipes }) {
  const history = useHistory();

  //Redirects route path based on case provided by tab text content:
  function handleClick(e) {
      
    resetRecipes();
    
    switch (e.target.textContent) {
        case 'Create':
            history.push("/create")
            break;
        case 'Recipes':
            history.push("/recipes");
            break;
        case 'Categories':
            history.push("/categories")
            break;
        default:
            return history.push("/");
    }       
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