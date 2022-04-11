import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../css/RecipesPage.css';

function RecipeCard({ recipe, deleteRecipe }) {
  const [isFavorited, setIsFavorited] = useState(recipe.is_favorited);
  const history = useHistory();

  const handleClick = () => history.push(`/recipes/${recipe.id}`);

  //Sends delete request to server for plant ID and calls onDelete callback to remove plant card div:
  const handleDelete = e => {
    e.stopPropagation();

    fetch(`http://localhost:9292/recipes/${recipe.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => deleteRecipe(recipe.id));
  }

  //Sends delete request to server for plant ID and calls onDelete callback to remove plant card div:
  const handlePatch = e => {
    e.stopPropagation();

    fetch(`http://localhost:9292/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_favorited: !recipe.is_favorited
      }),
    })
    .then(r => r.json())
    .then(patchedRecipe => console.log(patchedRecipe))

    return setIsFavorited(!isFavorited);
  }

  return (
    <div className="recipe-card" onClick={handleClick}>
      <div className="recipe-card-content" style={{backgroundImage: `url(${recipe.image_url})`}}>
        <div className="recipe-card-icons">
          <img src={isFavorited? "./images/icons/star-filled.png" : "./images/icons/star-empty.png"} alt="Star Icon" onClick={handlePatch}/>
          <img src="./images/icons/trash.png" alt="Trash Icon" onClick={handleDelete}/>
        </div>
        <p>{recipe.title}</p>
      </div>
    </div>
  );
}

export default RecipeCard;