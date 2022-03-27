import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const ProductCard = ({
  productDetails: {
    _id,
    name,
    price,
    image,
    rating,
    description,
    category,
    brand,
  },
}) => {
  const tooltipContent = `
    <ul>
    <li><strong>Brand: </strong>${brand}</li>
    <li><strong>Category: </strong>${category}</li>
    <li><strong>Rating: </strong>${rating}</li>
    </ul>
  `;

  return (
    <>
      <div className="card vertical">
        <div className="card__image">
          <span
            data-tip={tooltipContent}
            data-html="true"
            data-class="tooltip"
            className="badge badge-warning"
          >
            <i className="fa-solid fa-circle-info"></i>
          </span>
          <ReactTooltip />

          <Link to="/">
            <img alt="" className="img-responsive" src={image} />
          </Link>
        </div>
        <div className="card__content">
          <Link className="card__name" to="/">
            {name}
          </Link>
          <p>{description}</p>
          <div className="card__bottom">
            <div className="card__price">
              <span>₹{price}</span>
            </div>
            <div className="card__buttons">
              <button className="btn btn--sm btn--primary">
                <i className="fas fa-shopping-cart" aria-hidden="true" /> Add to
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
