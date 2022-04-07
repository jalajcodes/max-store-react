import { Buffer } from "buffer";
import { useState } from "react";
import { getPriceInfo } from "../Utils/cartUtils";

const CartPriceInfo = ({ cartItems }) => {
  const [shareText, setShareText] = useState("");
  const { total, discount, qty } = getPriceInfo(cartItems);

  const handleShareCart = (items) => {
    setShareText(null);
    const itemIds = items.map((item) => item.product);
    const encodedIds = Buffer.from(JSON.stringify(itemIds), "utf8").toString(
      "base64"
    );
    const url = `${window.location.origin}/cart/shared/${encodedIds}`;

    setShareText(url);
  };

  return (
    <div className="cart-page__price-info">
      <h4>Order Summary ({qty === 1 ? "1 Item" : `${qty} Items`})</h4>
      <div className="price-info">
        <div className="price-info__item">
          <span> Total Price (MRP) </span>
          <span>{total}</span>
        </div>
        <div className="price-info__item">
          <span> Discount </span>
          <span>
            {total < discount ? <strike>{discount}</strike> : discount}
          </span>
        </div>
        <div className="price-info__item">
          <span>Price After Discount </span>
          <span>{total < discount ? total : total - discount}</span>
        </div>
        <div className="price-info__button">
          <button className="btn btn--primary">Checkout</button>
        </div>
        <div className="price-info__button">
          <button
            onClick={() => handleShareCart(cartItems)}
            className="btn btn--primary"
          >
            Share your Cart
          </button>
        </div>
        {shareText && (
          <div className="share-text">
            <p>
              You can copy below URL and share your cart with your friends. They
              need to be logged in to view it.
            </p>
            <p>{shareText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPriceInfo;
