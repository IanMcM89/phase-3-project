import React from "react";
import Recipe from './Recipe';
import '../css/App.css';

function Main({ recipes }) {
  //Returns Recipe component for each recipe in fetched recipe data:
  const recipesToBeDisplayed = recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)

  return (
    <div id="app-main">
      <div className="app-main-container">
          {recipesToBeDisplayed}
      </div>
    </div>
  );
}

export default Main;