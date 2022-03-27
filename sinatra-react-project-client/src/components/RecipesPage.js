import React from "react";
import Recipe from './Recipe';
import '../css/Recipe.css';

function RecipesPage({ recipes }) {
  //Returns Recipe component for each recipe in fetched recipe data:
  const recipesToBeDisplayed = recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)

  return (
    <main className="app-main">
      <div id="recipes-container">
          {/* {recipesToBeDisplayed} */}
      </div>
    </main>
  );
}

export default RecipesPage;