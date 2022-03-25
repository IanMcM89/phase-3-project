import React from "react";
import '../css/App.css';

function Main({ recipes }) {
  const recipesToBeDisplayed = recipes.filter(recipe => console.log(recipe))

  return (
    <div id="app-main">
      <div className="recipe-card-table">
          {recipesToBeDisplayed}
      </div>
    </div>
  );
}

export default Main;