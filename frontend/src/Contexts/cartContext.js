import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { cartReducer, initialCartData } from "../Reducers/cartReducer";

const CartContext = createContext({
  state: initialCartData,
  cartDispatch: () => {},
});

const CartProvider = ({ children }) => {
  const [state, cartDispatch] = useReducer(cartReducer, initialCartData);

  const addToCart = async (id, qty) => {
    const { data } = await axios.get(`/api/products/${id}`);

    cartDispatch({
      type: "CART_ADD_ITEM",
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        description: data.description,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  };

  const removeFromCart = (id) => {
    cartDispatch({
      type: "CART_REMOVE_ITEM",
      payload: id,
    });
  };

  const saveShippingAddress = (data) => {
    cartDispatch({
      type: "CART_SAVE_SHIPPING_ADDRESS",
      payload: data,
    });

    localStorage.setItem("maxStoreUserAddress", JSON.stringify(data));
  };

  const value = {
    cartItems: state.cartItems,
    cartDispatch,
    addToCart,
    removeFromCart,
    saveShippingAddress,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
