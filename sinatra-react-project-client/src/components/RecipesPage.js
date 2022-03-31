import React from "react";
import RecipeCard from './RecipeCard';
import Search from "./Search"
import '../css/Recipe.css';

function RecipesPage(props) {
  //Returns Recipe component for each recipe in fetched recipe data:
  const mapRecipes = () => {
    if (props.searchValue !== '') {
      return props.searchResults.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    } else {
      return props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    }
  }

  const recipesToBeDisplayed = mapRecipes();

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <div id="main-header-content">
            <img src="./images/icons/logo.png" alt="Leaf Icon"/>
            <h2>{props.headerText}</h2>
          </div>
          <Search
            searchValue={props.searchValue}
            searchRecipes={props.searchRecipes}
          />
        </div>
        <div id="recipe-grid">
          {recipesToBeDisplayed}
        </div>
      </div>
      <div className="overlay-up "/>
    </main>
  );
}

export default RecipesPage;