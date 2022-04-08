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

  //Return Recipe component for each recipe in fetched recipe data:
  const displayCategories = categories.map(category => 
    <CategoryCard 
      key={category.id} 
      category={category} 
      categorizeRecipes={categorizeRecipes}
      setCategorySelected={setCategorySelected}
    />
  );

  return (
    <main>
      <div className="main-header-wrapper">
        <div className="main-header">
          <img src="./images/icons/logo.png" alt="Leaf Icon"/>
          <h2>Categories</h2>
        </div>
      </div>
      <div id="category-grid">
        {displayCategories}
      </div>
      <div className="overlay overlay--right"/>
    </main>
  );
}

export default CategoriesPage;