import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="#" aria-label="NFT Gallery home">
          <img src="/images/logo.svg" alt="" />
          <span>NFT<span>Gallery</span></span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;