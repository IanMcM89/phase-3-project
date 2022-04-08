import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import CategoriesPage from './CategoriesPage';
import RecipesPage from './RecipesPage';
import RecipeForm from './RecipeForm.js';
import Recipe from './Recipe';
import Header from './Header';
import Home from './Home';
import '../css/App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [getRecipes, setGetRecipes] = useState(false);
  const [categorySelected, setCategorySelected] = useState(false);

  //Fetch recipes:
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(recipeData => {
      setRecipes(recipeData);
      setGetRecipes(false);
      console.log("GET http://localhost:9292/recipes");
    })
  },[getRecipes]);

  const categorizeRecipes = category => {
    setRecipes(recipes.filter(recipe => recipe.category_id === category.id));
  }

  const resetRecipes = () => {
    setGetRecipes(!getRecipes);
    setCategorySelected(false);
  }

  return (
    <div id="app">
      <Header
        resetRecipes={resetRecipes}
      />
      <Switch>
        <Route exact path="/create">
          <RecipeForm recipes={recipes}/>
        </Route>
        <Route exact path="/recipes/:id">
          <Recipe/>
        </Route>
        <Route exact path="/recipes">
          <RecipesPage 
            recipes={recipes} 
            setRecipes={setRecipes}
            categorySelected={categorySelected}
          />
        </Route>
        <Route exact path="/categories">
          <CategoriesPage
            categorizeRecipes={categorizeRecipes}
            setCategorySelected={setCategorySelected}
          />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
