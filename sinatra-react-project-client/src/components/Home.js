import React from "react";
import '../css/Home.css';

function Home() {
  return (
    <main className="app-main">
      <div class='container'>
        <div class="container_content">
          <div class="container_content_inner">
            <div class="title">
              <img src="./images/icons/logo.png" alt="Leaf Icon"/>
              <h1>Recipes.</h1>
            </div>
            <div class="par">
              <h2>No Nonsense. All Recipes.</h2>
              <p>
                Tired of history lessons and endless scrolling every time you search for a recipe online? NNR provides only recipes and ingredients, without all the...extra...information. Simply choose a category to get started or browse through the recipes catalogue.
              </p>
            </div>
            <div class="btns">
              <a href="/categories" class="button">Get Started</a>
            </div>
          </div>
        </div>
        <div className="container_img"/>
      </div>
      <div class="overlay-left"></div>
    </main>
  );
}

export default Home;