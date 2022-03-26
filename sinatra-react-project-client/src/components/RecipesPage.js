import React from "react";
import Recipe from './Recipe';
import '../css/App.css';

function RecipesPage({ recipes }) {
  //Returns Recipe component for each recipe in fetched recipe data:
  const recipesToBeDisplayed = recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)

  return (
    <main className="app-main">
      <div className="app-main-container">
          {/* {recipesToBeDisplayed} */}
      </div>
    </main>
  );
}

export default RecipesPage;