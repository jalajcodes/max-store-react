import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/cartContext";
import "../Styles/Shipping.scss";

const ShippingScreen = () => {
  const navigate = useNavigate();
  const { shippingAddress, saveShippingAddress } = useCart();

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (address && city && postalCode && country) {
      saveShippingAddress({ address, city, postalCode, country });
    } else {
      setError("Please fill all the fields!!!");
    }

    navigate("/placeorder", { state: { hasAddress: true } });
  };

  return (
    <div className="shipping-screen form-wrap">
      <div className="title">
        <h2>Shipping Address</h2>
      </div>
      <div className="address-form">
        <form className="signup-form" method="post" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              className="input"
              id="address"
              autoComplete="off"
              placeholder="Address"
              value={address}
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input"
              id="city"
              autoComplete="off"
              placeholder="City"
              value={city}
              required
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input"
              id="postalcode"
              autoComplete="off"
              required
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input"
              id="country"
              autoComplete="off"
              placeholder="Country"
              required
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          {error && <div className="alert alert-warning">{error}</div>}
          <button
            type="submit"
            className="btn btn--primary"
            defaultValue="Continue"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingScreen;
