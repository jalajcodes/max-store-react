import ProductCard from "../Components/ProductCard";
import ProductsFilterSection from "../Components/ProductsFilterSection";
import { useProduct } from "../Contexts/productContext";
import { filterByCategory, sortProducts } from "../Utils/productUtils";
import "../Styles/Products.scss";

const Products = () => {
  const {
    productsList,
    categoriesList,
    sortByLowAndHigh,
    sortByRating,
    priceRange,
    loading,
  } = useProduct();

  const filteredData = filterByCategory([...productsList], categoriesList);
  const sortedData = sortProducts(
    [...filteredData],
    sortByLowAndHigh,
    priceRange,
    sortByRating
  );

  return (
    <main className="product-page container">
      <ProductsFilterSection />
      <div className="product-page__cards grid col-autofit">
        {sortedData && sortedData.length === 0 && loading ? (
          <img src="/images/loader.svg" alt="Loading products..." />
        ) : sortedData.length > 0 ? (
          sortedData.map((product) => (
            <ProductCard key={product._id} productDetails={product} />
          ))
        ) : (
          <h3>0 Products found. Try clearing all the filters.</h3>
        )}
      </div>
    </main>
  );
};

export default Products;
