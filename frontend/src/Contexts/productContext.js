import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer, initialProductData } from "../Reducers/productReducer";

const ProductContext = createContext({
  state: initialProductData,
  dispatch: () => {},
});

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialProductData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        dispatch({
          type: "INITIALIZE_DATA",
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const value = {
    dispatch: dispatch,
    categoriesList: state.categoriesList,
    productsList: state.productsList,
    sortByRating: state.sortByRating,
    priceRange: state.priceRange,
    sliderValue: state.sliderValue,
    sortByLowAndHigh: state.sortByHighLow,
    loading: state.loading,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
