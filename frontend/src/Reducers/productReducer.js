const initialProductData = {
  priceRange: { min: 0, max: 9999 },
  sortByLowAndHigh: "",
  categoriesList: {},
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
        categoriesList: categories,
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
        categoriesList: {
          ...state.categoriesList,
          ...action.payload,
        },
      };

    case "SORT_BY_RATING":
      return {
        ...state,
        sortByRating: action.payload,
      };

    case "CLEAR_FILTER":
      for (const cat in state.categoriesList) {
        state.categoriesList[cat] = false;
      }
      return {
        sortByHighLow: "",
        categoriesList: state.categoriesList,
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
