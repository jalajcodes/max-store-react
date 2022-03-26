import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { useProduct } from "../Contexts/productContext";
import "../Styles/Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const { productsList, categoriesList, dispatch } = useProduct();

  const popularProducts = productsList
    .filter((product) => product.rating >= 4)
    .slice(0, 4);

  const handleCategoryClick = (e, name) => {
    dispatch({
      type: "CLEAR_FILTER",
      payload: productsList,
    });
    dispatch({
      type: "CATEGORY",
      payload: { [name]: true },
    });
    navigate(`/products`);
  };

  return (
    <section className="home-page">
      <div className="cta container">
        <div className="cta-text">
          <h1>
            All You Need for Your <span>Wardrobe</span>
          </h1>
          <p>
            Shop now to get <img src="./images/max.png" alt="" /> discount.
          </p>
          <div className="cta-buttons fa-move">
            <a href="#categories">
              <button className="btn btn--primary">
                Shop Now&nbsp;
                <i className="fa-solid fa-angle-down fa-bounce"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="cta-img">
          <img src="./images/shopping.svg" alt="" />
        </div>
      </div>

      <section className="categories container" id="categories">
        <h2>Categories</h2>
        <div className="categories__container grid col-autofit">
          {Object.entries(categoriesList).map(([category, checked]) => {
            const image =
              category === "Shoes"
                ? "shoe3.jpeg"
                : category === "Toys"
                ? "toy2.jpeg"
                : category === "Clothing"
                ? "top2.jpeg"
                : "airpods.jpg";

            return (
              <div
                className="category"
                onClick={(e) => handleCategoryClick(e, category)}
              >
                <img
                  className="category-image"
                  src={`./images/${image}`}
                  alt="picsum"
                />
                <span>{category}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="products container">
        <h2>Popular Products</h2>

        <div className="grid col-autofit">
          {popularProducts.map((product) => (
            <ProductCard key={product._id} productDetails={product} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
