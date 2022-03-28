import React from "react";
import '../css/Recipe.css';

function Recipe({ recipe }) {
  return (
    <div className="recipe-card" style={{backgroundImage: `url(${recipe.image_url})`}}>
      <p>{recipe.title}</p>
    </div>
  );
}

export default Recipe;