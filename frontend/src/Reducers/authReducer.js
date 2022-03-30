const initialUserState = {
  userInfo: JSON.parse(localStorage.getItem("maxStoreUserData")) || {},
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_AUTH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_AUTH_SUCCESS":
      return { ...state, loading: false, userInfo: action.payload };
    case "USER_AUTH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "USER_LOGOUT":
      localStorage.removeItem("maxStoreUserData");
      localStorage.removeItem("maxStoreUserCart");
      localStorage.removeItem("maxStoreUserWishlist");
      return initialUserState;
    default:
      return state;
  }
};

export { authReducer, initialUserState };
