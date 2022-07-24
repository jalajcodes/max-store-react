import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useToast } from "../Contexts/toastContext";

import "../Styles/Profile.scss";

const Profile = () => {
  const { userState, userDispatch } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleLogout = (e) => {
    e.preventDefault();
    userDispatch({
      type: "USER_LOGOUT",
    });
    navigate("/");
    addToast({ type: "success", message: "Logged out successfully" });
  };

  if (!userState.userInfo.token) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="card horizontal text-only">
          <span className="badge badge-warning">
            {userState.userInfo.isAdmin ? "Admin User" : "Basic User"}
          </span>

          <div className="card__content">
            <p className="card__name">{userState.userInfo.name}</p>
            <p>{userState.userInfo.email}</p>
            <div className="card__bottom">
              <div className="card__buttons">
                <button
                  onClick={handleLogout}
                  className="btn btn--sm btn--primary"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Logout
                </button>
                <Link to="/orders">
                  <button to="/orders" className="btn btn--sm btn--primary">
                    My Orders
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
