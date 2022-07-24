import React, { useEffect } from "react";
import OrderCard from "../Components/OrderCard";
import { useOrder } from "../Contexts/orderContext";
import "../Styles/Orders.scss";

const Orders = () => {
  const { listMyOrders, myOrdersState } = useOrder();

  useEffect(() => {
    listMyOrders();
  }, []);

  return (
    <div className="placed-orders">
      <div className="container">
        <h2>Orders ({myOrdersState?.orders?.length})</h2>
        {myOrdersState.orders &&
          myOrdersState.orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
      </div>
    </div>
  );
};

export default Orders;
