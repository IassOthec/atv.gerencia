import React from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero__content">
            <p className="hero__eyebrow">DIGITAL COLLECTION</p>

            <h1>
              Discover the <span>future</span> of digital art.
            </h1>

            <p className="hero__description">
              Explore a collection of unique digital artworks created by
              futuristic artists from around the world.
            </p>

            <a className="hero__button" href="#collections">
              Explore collection
            </a>
          </div>
        </section>

        <section className="collection" id="collections">
          <div className="section-heading">
            <p className="section-heading__eyebrow">OUR COLLECTION</p>

            <h2>Featured NFTs</h2>

            <p>
              Discover unique digital artworks from our curated collection.
            </p>
          </div>

          <CardList />
        </section>

        <section className="about" id="about">
          <div className="about__content">
            <p className="section-heading__eyebrow">ABOUT</p>

            <h2>Digital art for a new generation.</h2>

            <p>
              This project was developed as a frontend challenge using React,
              CSS, Animate.css and responsive web design techniques.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 NFT Gallery. Frontend project.</p>
      </footer>
    </div>
  );
}

export default App;