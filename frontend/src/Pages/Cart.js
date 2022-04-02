import CartCard from "../Components/CartCard";
import CartPriceInfo from "../Components/CartPriceInfo";
import NotFound from "../Components/NotFound";
import { useCart } from "../Contexts/cartContext";
import "../Styles/Cart.scss";
const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <NotFound />;
  }
  return (
    <main className="cart-page container">
      <div className="cart-page__cards">
        {cartItems.map((item) => (
          <CartCard key={item.product} productDetails={item} />
        ))}
      </div>
      <CartPriceInfo cartItems={cartItems} />
    </main>
  );
};

export default Cart;
