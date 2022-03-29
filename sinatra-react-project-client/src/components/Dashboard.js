import React from "react";
import { useHistory } from 'react-router-dom';
import "../css/Header.css";

function Dashboard({resetRecipes}) {
    const history = useHistory();

    //Redirects route path based on case provided by tab text content:
    function handleClick(e) {
        resetRecipes();
        
        switch (e.target.textContent) {
            case 'Create':
                history.push("/create")
                break;
            case 'Recipes':
                history.push("/recipes");
                break;
            case 'Categories':
                history.push("/categories")
                break;
            default:
                return history.push("/");
        }       
    }

    return (
        <div id="dashboard">
            <section>
                {/* Dashboard buttons */}
                <button onClick={handleClick}>Home</button>
                <button onClick={handleClick}>Categories</button>
                <button onClick={handleClick}>Recipes</button>
                <button onClick={handleClick}>Create</button>
            </section>
        </div>
    );
}

export default Dashboard;