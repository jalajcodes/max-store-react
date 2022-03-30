const initialCartData = {
  cartItems: JSON.parse(localStorage.getItem("maxStoreUserCart")) || [],
  shippingAddress:
    JSON.parse(localStorage.getItem("maxStoreUserAddress")) || {},
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        const newState = {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
        localStorage.setItem(
          "maxStoreUserCart",
          JSON.stringify(newState.cartItems)
        );
        return newState;
      } else {
        const newState = {
          ...state,
          cartItems: [...state.cartItems, item],
        };
        localStorage.setItem(
          "maxStoreUserCart",
          JSON.stringify(newState.cartItems)
        );
        return newState;
      }
    case "CART_REMOVE_ITEM":
      const newState = {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
      localStorage.setItem(
        "maxStoreUserCart",
        JSON.stringify(newState.cartItems)
      );
      return newState;
    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case "CART_CLEAR_ITEMS":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export { cartReducer, initialCartData };
