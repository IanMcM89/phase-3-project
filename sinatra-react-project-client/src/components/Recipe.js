import React, {useState} from "react";
import '../css/Recipe.css';

function Recipe({ recipe }) {
  const [randomInteger] = useState(Math.ceil(Math.random() * 5));

  return (
    <div className="recipe-card">
      <div className="recipe-card-content" style={{backgroundImage: `url(${recipe.image_url})`}}>
        <p className="recipe-card-p">{recipe.title}</p>
      </div>
    </div>
  );
}

export default Recipe;