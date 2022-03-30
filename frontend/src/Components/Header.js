import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useCart } from "../Contexts/cartContext";
import { useToast } from "../Contexts/toastContext";
import { getPriceInfo } from "../Utils/cartUtils";

const Header = () => {
  const { userState, userDispatch, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { cartItems } = useCart();
  const { qty } = getPriceInfo(cartItems);

  const handleLogout = (e) => {
    e.preventDefault();
    userDispatch({
      type: "USER_LOGOUT",
    });
    navigate("/");
    addToast({ type: "success", message: "Logged out successfully" });
  };

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
