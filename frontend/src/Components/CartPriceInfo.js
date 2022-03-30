import { getPriceInfo } from "../Utils/cartUtils";

const CartPriceInfo = ({ cartItems }) => {
  const { total, discount, qty } = getPriceInfo(cartItems);

  return (
    <div className="cart-page__price-info">
      <h4>Cart ({qty === 1 ? "1 Item" : `${qty} Items`})</h4>
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
      </div>
    </div>
  );
};

export default CartPriceInfo;
