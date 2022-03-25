import React from "react";
import '../css/Recipe.css';

function Recipe({ recipe }) {
  return (
    <div className="recipe-card">
      <h1>{recipe.title}</h1>
    </div>
  );
}

export default Recipe;