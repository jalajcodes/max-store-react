const initialWishlistData = {
  wishlistItems: JSON.parse(localStorage.getItem("maxStoreUserWishlist")) || [],
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "WISHLIST_ADD_ITEM":
      const item = action.payload;

      const existItem = state.wishlistItems.find((x) => x._id === item._id);

      if (existItem) {
        return state;
      } else {
        const newState = {
          ...state,
          wishlistItems: [...state.wishlistItems, item],
        };
        localStorage.setItem(
          "maxStoreUserWishlist",
          JSON.stringify(newState.wishlistItems)
        );
        return newState;
      }
    case "WISHLIST_REMOVE_ITEM":
      const newState = {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (x) => x._id !== action.payload
        ),
      };
      localStorage.setItem(
        "maxStoreUserWishlist",
        JSON.stringify(newState.wishlistItems)
      );
      return newState;
    case "WISHLIST_CLEAR_ITEMS":
      return {
        ...state,
        wishlistItems: [],
      };
    default:
      return state;
  }
};

export { wishlistReducer, initialWishlistData };
