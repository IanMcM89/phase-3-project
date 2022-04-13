import React, { useState, useEffect } from "react";
import RecipeCard from './RecipeCard';
import Search from "./Search"
import '../css/RecipesPage.css';

function RecipesPage({ recipes, categorySelected, deleteRecipe, updateRecipes }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favoritesFirst, setFavoritesFirst] = useState(false);
  const [headerText, setHeaderText] = useState("All Recipes");
  const [recipesToBeDisplayed, setRecipesToBeDisplayed] = useState([]);

  useEffect(() => {
    const decideHeadertext = () => {
      categorySelected ?
        setHeaderText(`${recipes.length} results for ${categorySelected} category`) :
        setHeaderText("All Recipes");
    }

    if (searchValue === '' && !favoritesFirst) {
      decideHeadertext();
      return setRecipesToBeDisplayed(recipes);
    } else if (searchValue === '' && favoritesFirst) {
      decideHeadertext();
      return setRecipesToBeDisplayed([...recipes].sort((x, y) => y.is_favorited - x.is_favorited));
    } else if (searchValue !== '' && !favoritesFirst) {
      setHeaderText(`${searchResults.length} Results for '${searchValue}'`);
      return setRecipesToBeDisplayed(searchResults);
    } else {
      setHeaderText(`${searchResults.length} Results for '${searchValue}'`);
      return setRecipesToBeDisplayed([...searchResults].sort((x, y) => y.is_favorited - x.is_favorited));
    }
  }, [recipes, categorySelected, favoritesFirst, searchValue, searchResults]);

  //Return Recipe component for each recipe in fetched recipe data:
  const displayRecipes = recipesToBeDisplayed.map(recipe =>
    <RecipeCard 
      key={recipe.id} 
      recipe={recipe} 
      deleteRecipe={deleteRecipe} 
      updateRecipes={updateRecipes}
    />
  )

  return (
    <main>
      <div className="main-header-wrapper">
        <div className="main-header">
          <img src="./images/icons/logo.png" alt="Leaf Icon" />
          <h2>{headerText}</h2>
          <h4>Favorites:</h4>
          <label className="favorites-switch">
            <input 
              type="checkbox"
              onClick={() => setFavoritesFirst(!favoritesFirst)}
              />
              <span class="favorites-slider"/>
          </label>
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
      <div className="overlay overlay--up" />
    </main>
  );
}

export default RecipesPage;