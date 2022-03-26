import React from "react";
import '../css/Home.css';

function Home() {
  return (
    <main className="app-main">
      <div id="home-div">
        <section id="text-container">
          <div>
            <img src="./images/icons/logo.png" alt="Leaf Icon"/>
            <h1>Recipes.</h1>
          </div>
        </section>
        <section id="image-container"/>
      </div>
    </main>
  );
}

export default Home;