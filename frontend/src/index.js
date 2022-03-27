import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import App from "./App";
import { ProductProvider } from "./Contexts/productContext";
import { AuthProvider } from "./Contexts/authContext";
import { ToastProvider } from "./Contexts/toastContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
