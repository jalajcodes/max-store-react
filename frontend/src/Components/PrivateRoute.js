import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";
import { useToast } from "../Contexts/toastContext";

const PrivateRoute = () => {
  const { userState } = useAuth();

  return userState.userInfo.token ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ showToast: true }} replace={true} />
  );
};

const RestrictRoute = () => {
  const { userState } = useAuth();

  return userState.userInfo.token ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <Outlet />
  );
};

export { PrivateRoute, RestrictRoute };
