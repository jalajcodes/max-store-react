import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import App from "./App";
import { ProductProvider } from "./Contexts/productContext";
import { AuthProvider } from "./Contexts/authContext";
import { ToastProvider } from "./Contexts/toastContext";
import { CartProvider } from "./Contexts/cartContext";
import { WishlistProvider } from "./Contexts/wishlistContext";
import { OrderProvider } from "./Contexts/orderContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <OrderProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </OrderProvider>
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
