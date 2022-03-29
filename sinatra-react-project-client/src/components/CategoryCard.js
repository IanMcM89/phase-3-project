import React from "react";
import { useHistory } from 'react-router-dom';
import '../css/Category.css';

function CategoryCard({ category, integer, categorizeRecipes }) {
    const history = useHistory();

    function handleClick() {
        categorizeRecipes(category);

        return history.push("/recipes")
    }

    return (
        <div className={`category-${integer}`} onClick={handleClick}>
            <div className={`category-card-${integer}`}>
                <p className="category-card-p">{category.name}</p>
            </div>
        </div>
    );
}

export default CategoryCard;