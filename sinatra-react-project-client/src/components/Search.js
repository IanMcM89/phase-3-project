import React from "react";
import "../css/RecipesPage.css";

function Search(props) {

  //Control search input:
  const handleSearch = e => {
    const filterRecipes = props.recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    props.setSearchResults(filterRecipes);
    props.setSearchValue(e.target.value);
  };

  return (
    <div id="search">
      <img src="./images/icons/search.png" alt="Search Icon" />
      <input
        type="text"
        name="search"
        placeholder="Search Recipes"
        value={props.searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;