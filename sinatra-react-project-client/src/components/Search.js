import React from "react";
import "../css/Recipe.css";

function Search(props) {
    //Controls search input field and changes filtered recipes state based on search input provided:
    const handleSearch = e => {
        return props.searchRecipes(e.target.value);
    };

    return (
        <div id="main-header-search">
            <img className="search-icon" src="./images/icons/search.png" alt="Search Icon"/>
            <input 
                className="search-input" 
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