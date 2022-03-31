import React, { useEffect, useState } from "react";
import Header from './Header';
import Home from './Home';
import RecipesPage from './RecipesPage';
import CategoriesPage from './CategoriesPage';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [headerText, setHeaderText] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [getRecipes, setGetRecipes] = useState(false)

  //Fetch recipes:
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(recipeData => {
      setRecipes(recipeData);
      console.log('Recipes fetched')
    })
    .then(setHeaderText("All Recipes"));
  },[getRecipes]);

  const resetRecipes = () => setGetRecipes(!getRecipes);

  const searchRecipes = input => {
    const filteredRecipes = recipes.filter(
      recipe => recipe.title.split(' ').find(
        word => word.toLowerCase() === input.toLowerCase()
    ));
    setSearchValue(input);
    setSearchResults(filteredRecipes);
    setHeaderText(input !== '' ? `${filteredRecipes.length} results for '${input}'` : "All Recipes");
  };

  const categorizeRecipes = category => {
    const categorizedRecipes = recipes.filter(
      recipe => recipe.category_id === category.id
    );
    setRecipes(categorizedRecipes);
    setHeaderText(`${categorizedRecipes.length} results for '${category.name}'`);
  }

  return (
    <div id="app">
      <Header
        resetRecipes={resetRecipes}
      />
      <Switch>
        <Route exact path="/categories">
          <CategoriesPage 
          categorizeRecipes={categorizeRecipes}
        />
        </Route>
        <Route exact path="/recipes">
          <RecipesPage 
            recipes={recipes} 
            headerText={headerText}
            searchValue={searchValue}
            searchResults={searchResults}
            searchRecipes={searchRecipes}
          />
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
