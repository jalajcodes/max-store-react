import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/cartContext";
import { useAuth } from "../Contexts/authContext";
import { useEffect, useState } from "react";
import { useToast } from "../Contexts/toastContext";
import "./Styles/cartCard.scss";
import { useWishlist } from "../Contexts/wishlistContext";

const CartCard = ({
  productDetails: { product, name, price, image, description, qty },
}) => {
  const [qtyCounter, setQtyCounter] = useState(qty);
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
    if (action === "DECREMENT" && qtyCounter > 1) {
      setQtyCounter(qtyCounter - 1);
    } else if (action === "INCREMENT") {
      setQtyCounter(qtyCounter + 1);
    }

    return null;
  };

  const handleRemoveItem = () => {
    addToast({ type: "success", message: "Item removed from cart" });
    removeFromCart(product);
  };

  useEffect(() => {
    addToCart(product, qtyCounter);
  }, [qtyCounter, product]);

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
                disabled={qtyCounter === 1}
                className="btn btn--primary btn--sm "
                onClick={() => handleQuantity("DECREMENT")}
              >
                -
              </button>
              <span className="quantity-input">{qty}</span>
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
