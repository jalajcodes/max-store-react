import "../Styles/Productpage.scss";
import { useNavigate, useParams, useLocation } from "react-router";
import { useProduct } from "../Contexts/productContext";
import { useCart } from "../Contexts/cartContext";
import { useToast } from "../Contexts/toastContext";
import { useAuth } from "../Contexts/authContext";
import { useWishlist } from "../Contexts/wishlistContext";

const ProductPage = () => {
  const { addToCart, cartItems } = useCart();
  const { addToast } = useToast();
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const wishlistPage = location.pathname.includes("wishlist");
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const { id } = useParams();
  const { productsList } = useProduct();

  const product = productsList?.find((product) => {
    return product._id === id;
  });

  const isInCart = cartItems.find((item) => item.product === product._id);

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
        removeFromWishlist(product._id);
        return;
      } else {
        addToWishlist(product._id);
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

  return product ? (
    <section className="product-section">
      <div className="product-card">
        <div className="image">
          <img src={product.image} alt={`${product.name}`} />
        </div>
        <div className="details">
          <h1>{product.name} </h1>
          <div className="rating" style={{ "--rating": product.rating }}></div>
          <p>{product.description}</p>
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
              onClick={() => handleAddToCart(product._id, 1)}
              className="btn btn--sm btn--primary"
            >
              <i className="fas fa-shopping-cart" aria-hidden="true" />
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>
            <button
              data-tip={
                wishlistPage ? "Remove from Wishlist" : "Add to Wishlist"
              }
              onClick={() => handleWishlistClick()}
              className="btn btn--sm btn--primary"
            >
              <i
                className={`fa-solid ${wishlistPage ? "fa-xmark" : "fa-heart"}`}
              ></i>
              {wishlistPage ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default ProductPage;
