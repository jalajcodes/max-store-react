import React from "react";
import { Link } from "react-router-dom";
import "./Styles/orderCard.scss";

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="details">
        <div>
          <span>Order Id:</span> {order._id}
        </div>
        <div>
          <span>Ordered On:</span> {new Date(order.createdAt).toLocaleString()}{" "}
          <span className="margin">Total:</span>{" "}
          <span className="highlight">₹{order.totalPrice}</span>
        </div>
      </div>

      <div className="items">
        {order.orderItems.map((item) => {
          return (
            <div key={item._id} className="item">
              <img src={item.image} width="50" alt={item.name} />
              <span>{item.name}</span>
              <small>Qty: {item.qty}</small>
              <small>Price: ₹{item.price}</small>
              <Link to={`/product/${item.product}`}>
                <button className="btn btn--outline">Buy Again</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCard;
