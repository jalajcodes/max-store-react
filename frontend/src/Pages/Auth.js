import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useToast } from "../Contexts/toastContext";
import "../Styles/Auth.scss";

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [authError, setAuthError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { userState, userDispatch, authenticateUser } = useAuth();
  const { loading, error, userInfo } = userState;
  const { addToast } = useToast();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    setAuthError("");
    const result = await authenticateUser(
      "login",
      email ? email : loginData.email,
      password ? password : loginData.password,
      "null"
    );
    result && addToast({ type: "success", message: "Logged in successfully" });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setAuthError("");

    if (signupData.password !== signupData.confirmPassword) {
      setAuthError("Passwords do not match");
      return;
    }

    const result = await authenticateUser(
      "register",
      signupData.email,
      signupData.password,
      `${signupData.firstName} ${signupData.lastName}`
    );

    result && addToast({ type: "success", message: "Registered successfully" });
  };

  useEffect(() => {
    const handleTabChange = () => {
      console.log("att");
      const tabs = document.querySelectorAll(".tabs h3 a");

      tabs.forEach((tab) => {
        tab.addEventListener("click", function (event) {
          event.preventDefault();
          tabs.forEach((el) => el.classList.remove("active"));
          const activeTab = event.target;
          activeTab.classList.add("active");

          const tab_content = event.target.getAttribute("href");
          const toShow = document.querySelector(tab_content);
          const toHide = document.querySelectorAll('div[id$="tab-content"]');
          toHide.forEach((el) => el.classList.remove("active"));
          toShow.classList.add("active");
        });
      });
    };

    handleTabChange();
  }, []);

  useEffect(() => {
    if (error) {
      setAuthError(error);
    }
    if (userInfo && userInfo.token) {
      navigate(redirect, { replace: true });
    }
  }, [userState, redirect]);

  return (
    <div className="form-wrap">
      <div className="tabs">
        <h3 className="login-tab">
          <a className="active" href="#login-tab-content">
            Login
          </a>
        </h3>
        <h3 className="signup-tab">
          <a href="#signup-tab-content">Sign Up</a>
        </h3>
      </div>
      <div className="tabs-content">
        <div id="login-tab-content" className="active">
          <form className="login-form">
            <div className="input-container">
              <input
                type="email"
                className="input"
                id="user_login"
                autoComplete="off"
                placeholder="Email"
                onChange={(e) => {
                  setAuthError("");
                  setLoginData({ ...loginData, email: e.target.value });
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                className="input"
                id="user_pass_login"
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => {
                  setAuthError("");
                  setLoginData({ ...loginData, password: e.target.value });
                }}
              />
            </div>
            {authError && (
              <div className="alert alert-warning">{authError}</div>
            )}
            <input type="checkbox" className="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
            <button
              className="btn btn--primary"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <button
              className="btn btn--primary mt-1 mb-1"
              onClick={(e) => {
                handleLogin(e, "john@maxstore.com", "test1234");
              }}
            >
              Login as Guest
            </button>
          </form>
          <div className="help-text">
            <p>
              <Link to="/">Forget your password?</Link>
            </p>
          </div>
        </div>
        <div id="signup-tab-content">
          <form className="signup-form" method="post">
            <div className="input-container">
              <input
                type="email"
                className="input"
                id="user_email"
                autoComplete="off"
                placeholder="Email"
                onChange={(e) => {
                  setAuthError("");
                  setSignupData({ ...signupData, email: e.target.value });
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="input"
                id="first_name"
                autoComplete="off"
                placeholder="First Name"
                onChange={(e) => {
                  setAuthError("");
                  setSignupData({ ...signupData, firstName: e.target.value });
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="input"
                id="last_name"
                autoComplete="off"
                placeholder="Last Name"
                onChange={(e) => {
                  setAuthError("");
                  setSignupData({ ...signupData, lastName: e.target.value });
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                className="input"
                id="user_pass_signup"
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => {
                  setAuthError("");
                  setSignupData({ ...signupData, password: e.target.value });
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                className="input"
                id="user_confirm_pass_signup"
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setAuthError("");
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  });
                }}
              />
            </div>
            {authError && (
              <div className="alert alert-warning">{authError}</div>
            )}
            <input
              type="submit"
              className="btn btn--primary"
              defaultValue="Sign Up"
              onClick={handleSignup}
            />
          </form>
          <div className="help-text">
            <p>By signing up, you agree to our</p>
            <p>
              <Link to="/">Terms of service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
