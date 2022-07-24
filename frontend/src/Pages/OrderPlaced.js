import React from "react";
import { Link } from "react-router-dom";
import "../Styles/OrderPlaced.scss";

const OrderPlaced = () => {
  return (
    <div className="order-placed">
      <div className="container">
        <img src="/images/success.gif" alt="" />
        <h2>Order Placed</h2>

        <p>
          Thank you for shopping with us. You can check your order summary from
          orders/profile page.
        </p>
        <div>
          <Link to="/orders" replace>
            <button className="btn btn--primary" isRound>
              My Orders
            </button>
          </Link>
          <Link to="/" replace>
            <button className="btn btn--outline" variant="outline" isRound>
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
