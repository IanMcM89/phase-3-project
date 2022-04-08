import React from "react";
import { useHistory } from 'react-router-dom';
import '../css/Category.css';

function CategoryCard(props) {
  const history = useHistory();

  const handleClick = () => {
    props.setCategorySelected(props.category.name);
    props.categorizeRecipes(props.category);
    return history.push("/recipes");
  }

  return (
    <div className="category-card" onClick={handleClick}>
      <div className="category-card-content">
        <p className="category-card-p">{props.category.name}</p>
      </div>
    </div>
  );
}

export default CategoryCard;