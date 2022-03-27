import React, { useEffect, useState } from "react";
import Header from './Header';
import Home from './Home';
import RecipesPage from './RecipesPage';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([])

  //Fetch recipe data from backend and set recipes state to fetched recipe data:
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(recipeData => {
      setRecipes(recipeData);
      setFilteredRecipes(recipeData);
    })
  },[]);

  return (
    <div id="app">
      <Header/>
      <Switch>
        <Route exact path="/recipes">
          <RecipesPage recipes={filteredRecipes}/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
