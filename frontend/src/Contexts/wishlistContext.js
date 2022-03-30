import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import {
  initialWishlistData,
  wishlistReducer,
} from "../Reducers/wishlistReducer";

const WishlistContext = createContext({
  state: initialWishlistData,
  wishlistDispatch: () => {},
});

const WishlistProvider = ({ children }) => {
  const [state, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistData
  );

  const addToWishlist = async (id) => {
    const { data } = await axios.get(`/api/products/${id}`);

    wishlistDispatch({
      type: "WISHLIST_ADD_ITEM",
      payload: data,
    });
  };

  const removeFromWishlist = (id) => {
    wishlistDispatch({
      type: "WISHLIST_REMOVE_ITEM",
      payload: id,
    });
  };

  const value = {
    wishlistItems: state.wishlistItems,
    wishlistDispatch: wishlistDispatch,
    addToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
