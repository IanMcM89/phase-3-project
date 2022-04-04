import React, { useEffect, useState } from "react";
import '../css/Recipe.css';

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [category, setCategory] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [directions, setDirections] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    //Fetch recipe:
    fetch(`http://localhost:9292${window.location.pathname}`)
      .then(r => r.json())
      .then(recipeData => {
        //Fetch category for recipe:
        fetch(`http://localhost:9292/categories/${recipeData.category_id}`)
          .then(r => r.json())
          .then(categoryData => setCategory(categoryData.name))
          .then(setRecipe(recipeData))
          .then(setDirections(recipeData.steps))
          .then(setIngredients(recipeData.ingredients))
      })
  }, []);

  const liDirections = directions.map(step => <li key={step}>{step}</li>);

  const liIngredients = ingredients.map(ingredient => {
    return (
      <li key={ingredient}>
        <label className="label label--checkbox">
          {ingredient}
          <input type="checkbox"/>
          <div className="checkbox__indicator"/>
        </label>
      </li>
    )
  });

  const handleClick = () => setIsHidden(!isHidden);

  return (
    <main>
      <div className="recipe">
        <div className="wrapper wrap--content-left">
          <h1>{recipe.title}</h1>
          <h2>{category}</h2>
          <p>{recipe.description}</p>
          <div className="divider">
            <div className="divider div--transparent div--dot"/>
          </div>
          <div className="wrapper wrap--ol">
            <div className="recipe__overlay overlay--directions"/>
            <h3>Directions:</h3>
            <ol>
              {liDirections}
            </ol>
          </div>
        </div>
        <div className="wrapper wrap--content-right">
          <div className="wrapper wrap--ul" style={{backgroundImage: `url(${recipe.image_url})`}} alt={`${recipe.title}`}>
            <button onClick={handleClick}>Ingredients List</button>
            <div className={isHidden ? "ingredients--hide" : "ingredients--show"}>
              <div className="recipe__overlay overlay--ingredients"/>
              <ul>
                {liIngredients}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-up"/>
    </main>
  );
}

export default Recipe;