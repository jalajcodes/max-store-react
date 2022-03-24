import "../Styles/Home.scss";

const Home = () => {
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
          <div className="category">
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo8myjvIUUE8TlUamvPYss2ZEzqbsB_tnKNpiVotCn9OC9qLf7rHgG_QAX-S79KwQrv-nz2BACa1Nt-r9J1yrPk51vRgIVwFt2XnVqgwq11h2wC-SqTH7_&usqp=CAc"
              alt="picsum"
            />
            <span>Shirts</span>
          </div>
          <div className="category">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="picsum"
            />
            <span>Electronics</span>
          </div>
          <div className="category">
            <img
              className="img-fluid"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7OhYgBecTp7EiHOnIap9gNgPWeF3hPaIs0tExX6dxcolj-wMWjghYzxxGSdS8DVCDXC0gfMHd_797gYxe1vBNvkl5NMcIiStmiKcXMSbI&usqp=CAc"
              alt="picsum"
            />
            <span>Tops</span>
          </div>
          <div className="category">
            <img
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCi2weNO6ZO3p_kbA6j0TnaEq8LYTyRJ8C61Gki7PLM70cWYTUNhjW2akKlG3BAPhbf1eBue6Ps37mOjgQgAblnPaYxTVe7uQ4v9tEC-E0ov8mw1AcoQXR_w&usqp=CAc"
              alt="picsum"
            />
            <span>Jackets</span>
          </div>
        </div>
      </section>

      <section className="products container">
        <h2>Popular Products</h2>

        <div className="grid col-autofit">
          <div className="card vertical">
            <div className="card__image">
              <span className="badge badge-warning">Sale</span>
              <a href="#">
                <img
                  className="img-responsive"
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                />
              </a>
            </div>
            <div className="card__content">
              <a className="card__name" href="#">
                Men's Cotton Sweatshirt
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                soluta, officia ipsum voluptatem laboriosam tenetur facilis
                illum assumenda dolorem deserunt. Facere laboriosam accusantium
                corrupti, repellendus ratione inventore architecto expedita
                aliquam!
              </p>
              <div className="card__bottom">
                <div className="card__price">
                  <span>Rs. 1000</span>
                </div>
                <div className="card__buttons">
                  <button className="btn btn--sm btn--primary">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>{" "}
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card vertical">
            <div className="card__image">
              <span className="badge badge-warning">Sale</span>
              <a href="#">
                <img
                  className="img-responsive"
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                />
              </a>
            </div>
            <div className="card__content">
              <a className="card__name" href="#">
                Men's Cotton Sweatshirt
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                soluta, officia ipsum voluptatem laboriosam tenetur facilis
                illum assumenda dolorem deserunt. Facere laboriosam accusantium
                corrupti, repellendus ratione inventore architecto expedita
                aliquam!
              </p>
              <div className="card__bottom">
                <div className="card__price">
                  <span>Rs. 1000</span>
                </div>
                <div className="card__buttons">
                  <button className="btn btn--sm btn--primary">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>{" "}
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card vertical">
            <div className="card__image">
              <span className="badge badge-warning">Sale</span>
              <a href="#">
                <img
                  className="img-responsive"
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                />
              </a>
            </div>
            <div className="card__content">
              <a className="card__name" href="#">
                Men's Cotton Sweatshirt
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                soluta, officia ipsum voluptatem laboriosam tenetur facilis
                illum assumenda dolorem deserunt. Facere laboriosam accusantium
                corrupti, repellendus ratione inventore architecto expedita
                aliquam!
              </p>
              <div className="card__bottom">
                <div className="card__price">
                  <span>Rs. 1000</span>
                </div>
                <div className="card__buttons">
                  <button className="btn btn--sm btn--primary">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>{" "}
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card vertical">
            <div className="card__image">
              <span className="badge badge-warning">Sale</span>
              <a href="#">
                <img
                  className="img-responsive"
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                />
              </a>
            </div>
            <div className="card__content">
              <a className="card__name" href="#">
                Men's Cotton Sweatshirt
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                soluta, officia ipsum voluptatem laboriosam tenetur facilis
                illum assumenda dolorem deserunt. Facere laboriosam accusantium
                corrupti, repellendus ratione inventore architecto expedita
                aliquam!
              </p>
              <div className="card__bottom">
                <div className="card__price">
                  <span>Rs. 1000</span>
                </div>
                <div className="card__buttons">
                  <button className="btn btn--sm btn--primary">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>{" "}
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
