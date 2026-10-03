import React from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="collections">
          <p className="eyebrow">DIGITAL COLLECTION</p>
          <h1>Explore the <span>future</span> of art.</h1>
          <p className="hero__text">
            Discover unique digital artworks from a curated collection of
            futuristic creators.
          </p>
        </section>

        <CardList />

        <section className="about" id="about">
          <h2>About the project</h2>
          <p>
            A responsive NFT gallery created as a Frontend Mentor inspired
            challenge using React, Vite, CSS and Animate.css.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;