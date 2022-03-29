import React, { useEffect, useState } from "react";
import CategoryCard from './CategoryCard';
import '../css/Category.css';

function CategoriesPage({ categorizeRecipes }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then(r => r.json())
    .then(categoryData => {
      setCategories(categoryData);
    })
  },[]);

  //Returns Recipe component for each recipe in fetched recipe data:
  const categoriesToBeDisplayed = categories.map(category => {
    return <CategoryCard key={category.id} category={category} integer={category.id} categorizeRecipes={categorizeRecipes} />
  });

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <img src="./images/icons/logo.png" alt="Leaf Icon"/>
          <h2>Categories</h2>
        </div>
        <div id="category-grid">
          {categoriesToBeDisplayed}
        </div>
      </div>
      <div className="overlay-right"/>
    </main>
  );
}

export default CategoriesPage;