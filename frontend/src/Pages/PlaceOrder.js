import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useCart } from "../Contexts/cartContext";
import { useOrder } from "../Contexts/orderContext";
import { useToast } from "../Contexts/toastContext";
import "../Styles/PlaceOrder.scss";
import { getPriceInfo } from "../Utils/cartUtils";

const PlaceOrder = () => {
  const { state } = useLocation();
  const { shippingAddress, cartItems, cartDispatch } = useCart();
  const { total, discount } = getPriceInfo(cartItems);
  const { createOrder, orderState } = useOrder();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { userState } = useAuth();

  if (!state?.hasAddress) navigate("/cart");

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      addToast({
        type: "error",
        message: "Razorpay SDK failed to load, please check your connection",
      });
      return;
    }

    const options = {
      key: "rzp_test_8CvA8ru4Y1mjzt",
      amount: (total - discount) * 100,
      currency: "INR",
      name: "Max Store",
      description: "Please complete the payment to place the order",
      handler: async function (response) {
        await createOrder({
          orderItems: cartItems,
          totalPrice: total - discount,
          shippingAddress,
          paymentResult: {
            id: response.razorpay_payment_id,
            status: "done",
            update_time: Date.now(),
            email_address: userState.userInfo.email,
          },
          isPaid: true,
          paidAt: Date.now(),
        });
        cartDispatch({
          type: "CART_CLEAR_ITEMS",
        });
        navigate("/order-placed");
      },

      prefill: {
        name: userState.userInfo.name,
        email: userState.userInfo.email,
      },

      theme: {
        color: "#f25c39",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePlaceOrder = async () => {
    displayRazorpay();

    // if (order && order._id) {
    //   navigate(`/order/${order._id}`);
    // }
  };

  return (
    <div className="place-order-page">
      <div className="order-receipt">
        <div className="col-1">
          <h2>Receipt</h2>

          <h5>Address</h5>
          <p>{`${shippingAddress.address}, ${shippingAddress.city} ${shippingAddress.postalCode}, ${shippingAddress.country}`}</p>
          <hr></hr>
          <h5>Items</h5>
          {cartItems.map((item) => (
            <li key={item.name} className="summary-items">
              <span>{item.name}</span>
              <span>
                {item.qty} x ₹{item.price}
              </span>
            </li>
          ))}
        </div>
        <div className="col-2">
          <h4>Order Summary</h4>
          <div>
            Items Price: <span>₹{total}</span>
          </div>
          <div>
            Discount: <span>₹{discount}</span>
          </div>
          <div>
            Shipping: <span>₹{0}</span>
          </div>
          <div>
            GST: <span>₹{0}</span>
          </div>
          <div>
            Total: <span>₹{total < discount ? total : total - discount}</span>
          </div>
          {orderState && orderState.error && (
            <div className="alert alert-warning">{orderState.error}</div>
          )}
          <button onClick={handlePlaceOrder} className="btn btn--primary">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
