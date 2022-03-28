import React from "react";
import '../css/Recipe.css';

function Recipe({ recipe }) {
  return (
    <div className="recipe-card" style={{ 
        backgroundImage: `url(${recipe.image_url})` 
      }}>
      <h1></h1>
    </div>
  );
}

export default Recipe;