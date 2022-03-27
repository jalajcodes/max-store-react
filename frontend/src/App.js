import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollTop";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import "./Styles/App.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
      <ScrollToTop />
    </Router>
  );
}

export default App;
