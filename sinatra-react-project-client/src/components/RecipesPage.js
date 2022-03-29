import React from "react";
import Recipe from './Recipe';
import '../css/Recipe.css';

function RecipesPage({ recipes }) {

  //Returns Recipe component for each recipe in fetched recipe data:
  const recipesToBeDisplayed = recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <img src="./images/icons/logo.png" alt="Leaf Icon"/>
          <h2>All Recipes</h2>
        </div>
        <div id="recipe-grid">
          {recipesToBeDisplayed}
        </div>
      </div>
      <div className="overlay-up "/>
    </main>
  );
}

export default RecipesPage;