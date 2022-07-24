import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useCart } from "../Contexts/cartContext";
import { useToast } from "../Contexts/toastContext";
import { getPriceInfo } from "../Utils/cartUtils";

const Header = () => {
  const { userState, userDispatch, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useToast();
  const { cartItems } = useCart();
  const { qty } = getPriceInfo(cartItems);
  const searchRef = useRef();
  const navLinks = useRef();
  const menuIcon = useRef();

  const handleLogout = (e) => {
    e.preventDefault();
    userDispatch({
      type: "USER_LOGOUT",
    });
    navigate("/");
    addToast({ type: "success", message: "Logged out successfully" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;

    if (!searchQuery.trim()) return;

    navigate(`/results/${searchQuery}`);
  };

  const handleMenuClick = (e) => {
    navLinks.current.classList.toggle("active");
  };

  useEffect(() => {
    if (location.pathname.includes("results")) return;
    searchRef.current.value = "";
  }, [location.pathname]);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <div className="nav__logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
        </Link>
        <div ref={navLinks} className="nav__links">
          <form className="nav__search" onSubmit={handleSearch}>
            <input
              id="search"
              ref={searchRef}
              type="text"
              placeholder="Search"
            />
            <button>
              <i className="fas fa-search" />
            </button>
          </form>
          <Link to="/products" className="nav__link">
            <i className="fa-solid fa-crown" />
            <span className="nav__link--text">Products</span>
          </Link>
          <Link to="/wishlist" className="nav__link">
            <i className="fa-solid fa-heart" />
            <span className="nav__link--text">Wishlist</span>
          </Link>
          <Link to="/cart" className="nav__link">
            {isLoggedIn && qty && qty > 0 ? (
              <span className="cart-qty">{qty}</span>
            ) : (
              <i className="fa-solid fa-bag-shopping" />
            )}
            <span className="nav__link--text">Cart</span>
          </Link>
          {userState && userState.userInfo && userState.userInfo.token ? (
            <>
              <Link to="/profile" className="nav__link">
                <i className="fa-solid fa-user"></i>
                Profile
              </Link>
              <a href="/" className="nav__link" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
              </a>
            </>
          ) : (
            <Link to="/auth" className="nav__link">
              <i className="fa-solid fa-right-to-bracket"></i>
              Login
            </Link>
          )}
        </div>

        <div
          ref={menuIcon}
          onClick={handleMenuClick}
          className="nav__menu-icon"
        >
          <i className="fa-solid fa-bars" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
