import React from "react";
import RecipeCard from './RecipeCard';
import '../css/Recipe.css';

function RecipesPage({ recipes, categoryName }) {

  //Returns Recipe component for each recipe in fetched recipe data:
  const recipesToBeDisplayed = recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <img src="./images/icons/logo.png" alt="Leaf Icon"/>
          <h2>{categoryName}</h2>
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