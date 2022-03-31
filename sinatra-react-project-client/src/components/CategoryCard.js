import React from "react";
import { useHistory } from 'react-router-dom';
import '../css/Category.css';

function CategoryCard(props) {
    const history = useHistory();

    function handleClick() {
        return history.push("/recipes") &
        props.categorizeRecipes(props.category);
    }

    return (
        <div className={`category-${props.integer}`} onClick={handleClick}>
            <div className={`category-card-${props.integer}`}>
                <p className="category-card-p">{props.category.name}</p>
            </div>
        </div>
    );
}

export default CategoryCard;