import React from "react";
import { useHistory } from 'react-router-dom';
import '../css/RecipesPage.css';

function RecipeCard({ recipe }) {
  const history = useHistory();

  const handleClick = () => history.push(`/recipes/${recipe.id}`);

  return (
    <div className="recipe-card" onClick={handleClick}>
      <div className="recipe-card-content" style={{backgroundImage: `url(${recipe.image_url})`}}>
        <p>{recipe.title}</p>
      </div>
    </div>
  );
}

export default RecipeCard;