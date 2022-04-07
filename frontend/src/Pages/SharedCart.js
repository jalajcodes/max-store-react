import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartCard from "../Components/CartCard";
import CartPriceInfo from "../Components/CartPriceInfo";
import NotFound from "../Components/NotFound";
import ProductCard from "../Components/ProductCard";
import { useCart } from "../Contexts/cartContext";
import "../Styles/Cart.scss";
const SharedCart = () => {
  const [cartData, setCartData] = useState([]);
  const { encodedIds } = useParams();

  useEffect(() => {
    const decodedIds = JSON.parse(
      Buffer.from(encodedIds, "base64").toString("utf8")
    );
    const fetchCart = async () => {
      const { data } = await axios.post("/api/products/ids", {
        ids: decodedIds,
      });

      setCartData(data);
    };

    fetchCart();
  }, [encodedIds]);

  if (cartData.length === 0) {
    return <NotFound />;
  }
  return (
    <main className="cart-page container">
      <div className="cart-page__cards">
        <h1>Shared Cart</h1>
        <div className="shared-cart-page-cards">
          {cartData.map((item) => (
            <ProductCard key={item._id} productDetails={item} />
          ))}
        </div>
      </div>
      {/* <CartPriceInfo cartItems={cartItems} /> */}
    </main>
  );
};

export default SharedCart;
