import React, { useEffect, useState } from "react";
import Header from './Header';
import Home from './Home';
import RecipesPage from './RecipesPage';
import CategoriesPage from './CategoriesPage';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  //Fetch recipe data from backend and set recipes state to fetched recipe data:
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(recipeData => {
      setRecipes(recipeData);
      setFilteredRecipes(recipeData);
    })
  },[]);

  const resetRecipes = () => setFilteredRecipes(recipes);
  const categorizeRecipes = (category) => {
    const categorizedRecipes = recipes.filter(recipe => recipe.category_id === category.id);

    return setFilteredRecipes(categorizedRecipes);
  }

  return (
    <div id="app">
      <Header resetRecipes={resetRecipes}/>
      <Switch>
        <Route exact path="/categories">
          <CategoriesPage recipes={recipes} categorizeRecipes={categorizeRecipes} />
        </Route>
        <Route exact path="/recipes">
          <RecipesPage recipes={filteredRecipes} />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
