import React from "react";
import '../css/Home.css';

function Home() {
  return (
    <main className="app-main">
      <div id="home-div">
        <div id="text-container">
          <section id="text-container-header">
            <img src="./images/icons/logo.png" alt="Leaf Icon"/>
            <h1>NNR.</h1>
          </section>
          <section id="text-container-description">
            <h2>No Nonsense. All Recipes.</h2>
            <p>Tired of history lessons and endless scrolling every time you search for a recipe online? NNR provides only recipes and ingredients, without all the...extra...information. Simply choose a category to get started or browse through the recipes catalogue.</p>
          </section>
          <section id="text-container-button">
            <a href="/categories" class="button">Get Started</a>
          </section>
        </div>
        <figure id="image-container"/>
      </div>
    </main>
  );
}

export default Home;