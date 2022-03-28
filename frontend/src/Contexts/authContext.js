import { createContext, useContext, useState, useReducer } from "react";
import axios from "axios";
import { authReducer, initialUserState } from "../Reducers/authReducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(authReducer, initialUserState);

  const authenticateUser = async (type, email, password, name) => {
    if (name && email && password !== "") {
      try {
        userDispatch({
          type: "USER_AUTH_REQUEST",
        });

        const payload = {
          email,
          password,
        };

        if (type === "register") {
          payload.name = name;
        }

        const { data } = await axios.post(`/api/users/${type}`, payload);

        userDispatch({
          type: "USER_AUTH_SUCCESS",
          payload: data,
        });

        localStorage.setItem("maxStoreUserData", JSON.stringify(data));
      } catch (error) {
        userDispatch({
          type: "USER_AUTH_FAIL",
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    }
  };

  const value = { userState, authenticateUser, userDispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
