import React, { useState, useEffect } from "react";
import RecipeCard from './RecipeCard';
import Search from "./Search"
import '../css/RecipesPage.css';

function RecipesPage({ recipes, categorySelected }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [headerText, setHeaderText] = useState("All Recipes");
  const [recipesToBeDisplayed, setRecipesToBeDisplayed] = useState([]);

  useEffect(() => {
    renderRecipes();
  });

  //Render recipes depending on category selected and/or if a search value is entered:
  const renderRecipes = () => {
    if (searchValue === '') {
      categorySelected ? 
        setHeaderText(`${recipes.length} results for ${categorySelected} category`) : 
        setHeaderText("All Recipes");
      return setRecipesToBeDisplayed(recipes);
    } else {
      setHeaderText(`${searchResults.length} Results for '${searchValue}'`);
      return setRecipesToBeDisplayed(searchResults);
    }
  }
  
  //Return Recipe component for each recipe in fetched recipe data:
  const displayRecipes = recipesToBeDisplayed.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)

  return (
    <main>
      <div className="main-header-wrapper">
        <div className="main-header">
          <img src="./images/icons/logo.png" alt="Leaf Icon"/>
          <h2>{headerText}</h2>
        </div>
        <Search 
          recipes={recipes}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchResults={setSearchResults}
        />
      </div>
      <div id="recipe-grid">
        {displayRecipes}
      </div>
      <div className="overlay overlay--up"/>
    </main>
  );
}

export default RecipesPage;