import React from "react";
import '../css/Home.css';

function Home() {
  return (
    <main className="app-main">
      <div id="home-div">
        <section id="text-container">
          <div id="text-container-header">
            <img src="./images/icons/logo.png" alt="Leaf Icon"/>
            <h1>Recipes.</h1>
          </div>
          <div id="text-container-description">
            <h2>Ut enim ad minim veniam</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
          </div>
        </section>
        <section id="image-container"/>
      </div>
    </main>
  );
}

export default Home;