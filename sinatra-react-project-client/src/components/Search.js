import React, {useState} from "react";
import "../css/Header.css";

function Search({ resetRecipes, searchRecipes }) {
    const [search, setSearch] = useState('');

    //Controls search input field and changes filtered plants state based on search input provided:
    function onChange(e) {
        setSearch(e.target.value);

        if (e.target.value === '') {
            return resetRecipes();
        } else {
            return searchRecipes(e.target.value);
        }
    }

    return (
        <div id="search">
            <input type="text" name="search" placeholder="Search Recipes" value={search} onChange={onChange} />
        </div>
    );
}

export default Search;