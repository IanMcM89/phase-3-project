import React from "react";
import Recipe from './Recipe';
import '../css/Recipe.css';

function RecipesPage({ recipes }) {
  //Returns Recipe component for each recipe in fetched recipe data:
  const recipesToBeDisplayed = recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <h2>All Recipes</h2>
        </div>
        <div className="main-table">
          {recipesToBeDisplayed}
        </div>
      </div>
      <div className="overlay-left"/>
    </main>
  );
}

export default RecipesPage;