import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <span className="col">
        <h3 className="col-title">Info</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="/">Formats</a>
            </li>
            <li>
              <a href="/">Compression</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Status</a>
            </li>
          </ul>
        </nav>
      </span>
      <span className="col">
        <h3 className="col-title">Resources</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="/">Developer API</a>
            </li>
            <li>
              <a href="/">Tools</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
      </span>
      <span className="col">
        <h3 className="col-title">Max Store</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Sustainability</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>
        </nav>
      </span>
      <span className="col">
        <div className="subscribe-form-holder">
          <h3 className="form-title">Subscribe to our email newsletter</h3>
          <form action="#" className="subscribe-form">
            <input
              type="email"
              name="email"
              id="email"
              className="email subscribe-input"
              autoComplete="off"
              placeholder="Your email"
            />
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </form>
        </div>
        <div className="social-media">
          <h3 className="social-col-title">Follow me</h3>
          <ul className="social-media-list">
            <li>
              <a href="https://twitter.com/jalajcodes" className="twitter">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jalajcodes" className="instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://github.com/jalajcodes" className="github">
                <i className="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </span>
    </footer>
  );
};

export default Footer;
