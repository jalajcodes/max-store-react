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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route element={<RestrictRoute />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ScrollToTop />
    </Router>
  );
}

export default App;
