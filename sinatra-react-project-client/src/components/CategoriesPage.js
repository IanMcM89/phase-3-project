import React, { useEffect, useState } from "react";
import CategoryCard from './CategoryCard';
import '../css/Category.css';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //Fetch categories
    fetch("http://localhost:9292/categories")
    .then(r => r.json())
    .then(categoryData => {
      setCategories(categoryData);
    })
  },[]); 

  //Returns Recipe component for each recipe in fetched recipe data:
  const categoriesToBeDisplayed = categories.map(category => <CategoryCard key={category.id} category={category}/>);

  return (
    <main className="app-main">
      <div className="main-container">
        <div className="main-header">
          <div id="main-header-content">
            <img src="./images/icons/logo.png" alt="Leaf Icon"/>
            <h2>Categories</h2>
          </div>
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