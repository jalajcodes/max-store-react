import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <div className="nav__logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
        </Link>
        <div className="nav__links">
          <div className="nav__search">
            <input type="text" placeholder="Search" />
            <button>
              <i className="fas fa-search" />
            </button>
          </div>
          <Link to="/products" className="nav__link">
            <i className="fa-solid fa-crown" />
            <span className="nav__link--text">Products</span>
          </Link>
          <Link to="/wishlist" className="nav__link">
            <i className="fa-solid fa-heart" />
            <span className="nav__link--text">Wishlist</span>
          </Link>
          <Link to="/cart" className="nav__link">
            <i className="fa-solid fa-bag-shopping" />
            <span className="nav__link--text">Cart</span>
          </Link>
          <Link to="/login" className="nav__link">
            <button className="btn btn--primary">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              Login
            </button>
          </Link>
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
