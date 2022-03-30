import { useLocation } from "react-router-dom";
import "./Styles/notFound.scss";

const NotFound = () => {
  const location = useLocation();

  const content =
    location.pathname === "/wishlist"
      ? "Wishlist is Empty :("
      : location.pathname === "/cart"
      ? "Cart is Empty :("
      : "Page Not Found";

  return (
    <div className="notfound-page">
      <h2>{content}</h2>
    </div>
  );
};

export default NotFound;
