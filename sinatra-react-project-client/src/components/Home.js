import React from "react";
import '../css/Home.css';

function Home() {
  return (
    <main className="app-main">
      <div className='container'>
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <img src="./images/icons/logo.png" alt="Leaf Icon"/>
              <h1>Recipes.</h1>
            </div>
            <div className="par">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
            <div className="btns">
              <a href="/categories" className="button">Get Started</a>
            </div>
          </div>
        </div>
        <div className="container_img"/>
      </div>
      <div className="overlay-left"></div>
    </main>
  );
}

export default Home;