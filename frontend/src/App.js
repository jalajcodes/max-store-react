import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollTop";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Products from "./Pages/Products";
import "./Styles/App.scss";
import { PrivateRoute, RestrictRoute } from "./Components/PrivateRoute";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import NotFound from "./Components/NotFound";
import SharedCart from "./Pages/SharedCart";
import ProductPage from "./Pages/Productpage";
import SearchPage from "./Pages/SearchPage";
import ShippingScreen from "./Pages/ShippingScreen";
import PlaceOrder from "./Pages/PlaceOrder";
import OrderPlaced from "./Pages/OrderPlaced";
import Orders from "./Pages/Orders";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/results/:query" element={<SearchPage />} />
          <Route element={<RestrictRoute />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/shared/:encodedIds" element={<SharedCart />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ScrollToTop />
    </Router>
  );
}

export default App;
