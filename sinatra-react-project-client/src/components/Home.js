import React from "react";
import '../css/Home.css';

function Home() {
  return (
    <main>
      <div id="home">
        <div className="home-wrapper">
          <div className="home-wrapper-inner">
            <div className="home-title">
              <img src="./images/icons/logo.png" alt="Leaf Icon"/>
              <h1>My Recipes.</h1>
            </div>
            <div className="home-par">
              <h2>Recipe collection by Ian.</h2>
              <p>
                Looking for recipes without all the 'filler?' My personal collection of quick and easy recipes is ever growing and provides simple directions and ingredients to make your life in the kitchen easier. Click the button below to choose a category and to get started.
              </p>
            </div>
            <div className="home-btn">
              <a href="/categories" className="button">Get Started</a>
            </div>
          </div>
        </div>
        <div className="home-img"/>
      </div>
      <div className="overlay overlay--left"></div>
    </main>
  );
}

export default Home;