import { Link } from "react-router-dom";
import { useCart } from "../Contexts/cartContext";
import { useRef } from "react";
import { useToast } from "../Contexts/toastContext";
import "./Styles/cartCard.scss";
import { useWishlist } from "../Contexts/wishlistContext";

const CartCard = ({
  productDetails: { product, name, price, image, description, qty },
}) => {
  const qtyCounter = useRef(qty);
  const { addToCart, removeFromCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { addToast } = useToast();

  const handleAddToWishlist = (id) => {
    addToWishlist(id);
    setTimeout(() => {
      removeFromCart(id);
    }, 0);
  };

  const handleQuantity = (action) => {
    if (action === "DECREMENT" && qtyCounter.current > 1) {
      qtyCounter.current--;
    } else if (action === "INCREMENT") {
      qtyCounter.current++;
    }
    addToCart(product, qtyCounter.current);
    return null;
  };

  const handleRemoveItem = () => {
    addToast({ type: "success", message: "Item removed from cart" });
    removeFromCart(product);
  };

  return (
    <>
      <div className="card horizontal">
        <div className="card__image">
          <Link to="/">
            <img alt="" className="img-responsive" src={image} />
          </Link>
        </div>
        <div className="card__content">
          <div className="card__name">
            <span>{name}</span>
            <span className="card__close" onClick={handleRemoveItem}>
              <i className="fas fa-times" aria-hidden="true"></i>
            </span>
          </div>
          <p>{description}</p>
          <div className="card__actions">
            <div className="quantity-selector">
              <button
                disabled={qtyCounter.current === 1}
                className="btn btn--primary btn--sm"
                onClick={() => handleQuantity("DECREMENT")}
              >
                -
              </button>
              <span className="quantity-input">{qtyCounter.current}</span>
              <button
                className="btn btn--primary btn--sm"
                onClick={() => handleQuantity("INCREMENT")}
              >
                +
              </button>
            </div>
          </div>
          <div className="card__bottom">
            <div className="card__price">
              <span>₹{price}</span>
            </div>

            <div className="card__buttons">
              <button
                onClick={() => handleAddToWishlist(product)}
                className="btn btn--sm btn--primary"
              >
                <i className="fa-solid fa-heart"></i> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
