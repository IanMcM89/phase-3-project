import React from "react";
import '../css/Recipe.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-content" style={{backgroundImage: `url(${recipe.image_url})`}}>
        <p className="recipe-card-p">{recipe.title}</p>
      </div>
    </div>
  );
}

export default RecipeCard;