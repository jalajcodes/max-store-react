import { useParams } from "react-router-dom";
import NotFound from "../Components/NotFound";
import ProductCard from "../Components/ProductCard";
import { useProduct } from "../Contexts/productContext";
import "../Styles/Search.scss";

const SearchPage = () => {
  const { query } = useParams();
  const { productsList } = useProduct();

  const items = productsList.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return query.trim() ? (
    <div className="search-page">
      <h2>Results for "{query}"</h2>
      <div className="container">
        {items.map((item) => (
          <ProductCard key={item._id} productDetails={item} />
        ))}
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default SearchPage;
