const initialProductData = {
  priceRange: { min: 0, max: 9999 },
  sortByHighLow: "",
  categories: {},
  sortByRating: "",
  productsList: [],
  loading: true,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      const categories = action.payload.categories.reduce(
        (acc, cat) => (acc[cat] ? acc : { ...acc, [cat]: false }),
        {}
      );
      return {
        ...state,
        productsList: action.payload.products,
        categories: categories,
        loading: false,
      };

    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };

    case "SORT_BY_HIGH_LOW":
      return {
        ...state,
        sortByHighLow: action.payload,
      };

    case "CATEGORY":
      return {
        ...state,
        categories: {
          ...state.categories,
          ...action.payload,
        },
      };

    case "SORT_BY_RATING":
      return {
        ...state,
        sortByRating: action.payload,
      };

    case "CLEAR_FILTER":
      for (const cat in state.categories) {
        state.categories[cat] = false;
      }
      return {
        sortByHighLow: "",
        categories: state.categories,
        sortByRating: "",
        priceRange: { min: 0, max: 9999 },
        productsList: action.payload,
        loading: false,
      };

    default:
      throw new Error("Something went wrong in dataReducer");
  }
};

export { productReducer, initialProductData };
