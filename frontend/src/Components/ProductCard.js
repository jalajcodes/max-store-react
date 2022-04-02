import ReactTooltip from "react-tooltip";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/cartContext";
import { useWishlist } from "../Contexts/wishlistContext";
import { useToast } from "../Contexts/toastContext";
import { useAuth } from "../Contexts/authContext";

const ProductCard = ({
  productDetails: {
    _id,
    name,
    price,
    image,
    rating,
    description,
    category,
    brand,
  },
}) => {
  const { addToCart, cartItems } = useCart();
  const { addToast } = useToast();
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const wishlistPage = location.pathname.includes("wishlist");
  const { addToWishlist, removeFromWishlist } = useWishlist();

  const tooltipContent = `
    <ul>
    <li><strong>Brand: </strong>${brand}</li>
    <li><strong>Category: </strong>${category}</li>
    <li><strong>Rating: </strong>${rating}</li>
    </ul>
  `;

  const isInCart = cartItems.find((item) => item.product === _id);

  const handleAddToCart = (id, qty) => {
    if (isLoggedIn) {
      if (isInCart) {
        navigate("/cart");
        return;
      }
      removeFromWishlist(id);
      addToCart(id, qty);
      addToast({ type: "success", message: "Item added to cart" });
    } else {
      navigate("/auth");
      addToast({ type: "error", message: "Please login to add items to cart" });
    }
  };

  const handleWishlistClick = () => {
    if (isLoggedIn) {
      if (wishlistPage) {
        addToast({ type: "success", message: "Item removed from wishlist" });
        removeFromWishlist(_id);
        return;
      } else {
        addToWishlist(_id);
        addToast({ type: "success", message: "Item added to wishlist" });
      }
    } else {
      navigate("/auth");
      addToast({
        type: "error",
        message: "Please login to add items to wishlist",
      });
    }
  };

  return (
    <>
      <div className="card vertical">
        <div className="card__image">
          <span
            data-tip={tooltipContent}
            data-html="true"
            data-class="tooltip"
            className="badge badge-warning"
          >
            <i className="fa-solid fa-circle-info"></i>
          </span>
          <ReactTooltip />

          <Link to="/">
            <img alt="" className="img-responsive" src={image} />
          </Link>
        </div>
        <div className="card__content">
          <Link className="card__name" to="/">
            {name}
          </Link>
          <p>{description}</p>
          <div className="card__bottom">
            <div className="card__price">
              <span>₹{price}</span>
            </div>
            <div
              className={`card__buttons ${wishlistPage && "wishlist-buttons"}`}
            >
              <button
                data-tip={
                  wishlistPage
                    ? "Add to Cart"
                    : isInCart
                    ? "Go to Cart"
                    : "Add to Cart"
                }
                onClick={() => handleAddToCart(_id, 1)}
                className="btn btn--sm btn--primary"
              >
                <i className="fas fa-shopping-cart" aria-hidden="true" />
              </button>
              <button
                data-tip={
                  wishlistPage ? "Remove from Wishlist" : "Add to Wishlist"
                }
                onClick={() => handleWishlistClick()}
                className="btn btn--sm btn--primary"
              >
                <i
                  className={`fa-solid ${
                    wishlistPage ? "fa-xmark" : "fa-heart"
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
