import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/">
          <div className="nav__logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
        </a>
        <div className="nav__links">
          <div className="nav__search">
            <input type="text" placeholder="Search" />
            <button>
              <i className="fas fa-search" />
            </button>
          </div>
          <a href="./product.html" className="nav__link">
            <i className="fa-solid fa-crown" />
            <span className="nav__link--text">Products</span>
          </a>
          <a href="./wishlist.html" className="nav__link">
            <i className="fa-solid fa-heart" />
            <span className="nav__link--text">Wishlist</span>
          </a>
          <a href="./cart.html" className="nav__link">
            <i className="fa-solid fa-bag-shopping" />
            <span className="nav__link--text">Cart</span>
          </a>
          <a href="./login.html" class="nav__link">
            <button class="btn btn--primary">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              Login
            </button>
          </a>
        </div>
        <div className="theme-switcher">
          <label className="theme-switcher__label" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="theme-switcher__thumb round" />
          </label>
        </div>
        <div className="nav__menu-icon">
          <i className="fa-solid fa-bars" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
