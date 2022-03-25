import React, { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(recipeData => {
      setRecipes(recipeData);
      setFilteredRecipes(recipeData);
      console.log(recipes)
    })
  },[]);

  return (
    <div id="app">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
