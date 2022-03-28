import React, { useEffect, useState } from "react";
import Category from './Category';
import '../css/Category.css';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [integer, setInteger] = useState(1);

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then(r => r.json())
    .then(categoryData => {
      setCategories(categoryData);
    })
  },[]);

  let i = integer;

  function increment() {
    i = i++;
    return i++;
  }

  //Returns Recipe component for each recipe in fetched recipe data:
  const categoriesToBeDisplayed = categories.map(category => {

    return <Category key={category.id} category={category} integer={increment()}/>
  });

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <h2>Categories</h2>
        </div>
        <div className="main-table">
          {categoriesToBeDisplayed}
        </div>
      </div>
      <div className="overlay-right"/>
    </main>
  );
}

export default CategoriesPage;