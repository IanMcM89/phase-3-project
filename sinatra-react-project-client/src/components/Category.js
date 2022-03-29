import React from "react";
import '../css/Category.css';

function Category({ category, integer }) {
    return (
        <div className={`category-${integer}`}>
            <div className={`category-card-${integer}`}>
                <p className="category-card-p">{category.name}</p>
            </div>
        </div>
    );
}

export default Category;