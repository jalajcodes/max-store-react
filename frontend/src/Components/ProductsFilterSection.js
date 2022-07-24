import { useRef } from "react";
import { useProduct } from "../Contexts/productContext";
import RangeSlider from "./RangeSlider";

const ProductsFilterSection = () => {
  const sortRef = useRef();
  const { priceRange, dispatch, categories, sortByRating, productsList } =
    useProduct();

  const handlePriceRangeChange = (range) => {
    dispatch({
      type: "PRICE_RANGE",
      payload: range,
    });
  };

  const handleCategoryChange = (item, e) => {
    dispatch({
      type: "CATEGORY",
      payload: { [item]: e.target.checked },
    });
  };

  const handleClearFilters = () => {
    sortRef.current.value = "DEFAULT";
    dispatch({
      type: "CLEAR_FILTER",
      payload: productsList,
    });
  };

  return (
    <div className="product-page__filters">
      <div className="heading">
        <h2>Filters</h2>
        <button
          className="btn btn--sm btn--outline"
          onClick={handleClearFilters}
        >
          Clear All
        </button>
      </div>
      <div className="filter-category select">
        <select
          defaultValue={"DEFAULT"}
          ref={sortRef}
          onChange={(e) => {
            dispatch({
              type: "SORT_BY_HIGH_LOW",
              payload: e.target.value,
            });
          }}
        >
          <option disabled value="DEFAULT">
            Sort By Price
          </option>
          <option value={"HIGH_TO_LOW"}>Price: High to Low</option>
          <option value={"LOW_TO_HIGH"}>Price: Low to High</option>
        </select>
      </div>

      <div className="price-range">
        <h4 className="text-uppercase">Price</h4>
        <div className="price-range mt-2">
          <RangeSlider
            min={0}
            max={9999}
            setMin={priceRange.min}
            setMax={priceRange.max}
            onPriceChange={(range) => handlePriceRangeChange(range)}
          />
        </div>
      </div>

      <div>
        <h4 className="text-uppercase">Categories</h4>
        {Object.entries(categories).map(([category, checked]) => {
          return (
            <label key={category} className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-field"
                checked={checked}
                onChange={(e) => handleCategoryChange(category, e)}
              />{" "}
              {category}
            </label>
          );
        })}
      </div>

      <div className="rating-filter">
        <h4 className="text-uppercase">Rating</h4>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} className="radio-container">
            <p>
              <input
                type="radio"
                name="radio"
                className="radio-field"
                value=""
                checked={sortByRating && sortByRating === rating}
                onChange={() => {
                  dispatch({
                    type: "SORT_BY_RATING",
                    payload: rating,
                  });
                }}
              />{" "}
              {rating} Stars & Above
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductsFilterSection;
