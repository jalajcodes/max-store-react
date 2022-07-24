import { useParams } from "react-router-dom";
import NotFound from "../Components/NotFound";
import ProductCard from "../Components/ProductCard";
import { useProduct } from "../Contexts/productContext";
import "../Styles/Search.scss";

const SearchPage = () => {
  const { query } = useParams();
  const { productsList } = useProduct();

  const items = productsList.filter((item) => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
  });

  return query.trim() ? (
    <div className="search-page">
      <h2>
        {items.length} Results for "{query}"
      </h2>
      <div className="container">
        {items.length ? (
          items.map((item) => (
            <ProductCard key={item._id} productDetails={item} />
          ))
        ) : (
          <h4>Try searching for something else</h4>
        )}
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default SearchPage;
