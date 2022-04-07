import NotFound from "../Components/NotFound";
import ProductCard from "../Components/ProductCard";
import { useWishlist } from "../Contexts/wishlistContext";
import "../Styles/Wishlist.scss";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();
  const items =
    JSON.parse(localStorage.getItem("maxStoreUserWishlist")) || wishlistItems;

  return items.length > 0 ? (
    <div className="wishlist-page">
      <h2>Wishlist ({items.length})</h2>
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

export default Wishlist;
