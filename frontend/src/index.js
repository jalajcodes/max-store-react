import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import App from "./App";
import { ProductProvider } from "./Contexts/productContext";
import { AuthProvider } from "./Contexts/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
