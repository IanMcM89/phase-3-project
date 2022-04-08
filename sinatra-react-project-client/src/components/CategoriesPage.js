import React, { useEffect, useState } from "react";
import CategoryCard from './CategoryCard';
import '../css/Category.css';

function CategoriesPage({ categorizeRecipes, setCategorySelected }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //Fetch category data:
    fetch("http://localhost:9292/categories")
    .then(r => r.json())
    .then(categoryData => {
      setCategories(categoryData);
    })
  },[]); 

  //Returns Recipe component for each recipe in fetched recipe data:
  const displayCategories = categories.map(category => 
    <CategoryCard 
      key={category.id} 
      category={category} 
      categorizeRecipes={categorizeRecipes}
      setCategorySelected={setCategorySelected}
    />
  );

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
          {displayCategories}
        </div>
      </div>
      <div className="overlay overlay--right"/>
    </main>
  );
}

export default CategoriesPage;