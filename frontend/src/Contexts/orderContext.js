import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import {
  listMyOrderReducer,
  orderCreateReducer,
} from "../Reducers/orderReducer";
import { useAuth } from "./authContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderCreateReducer, {});
  const [myOrdersState, myOrdersDispatch] = useReducer(listMyOrderReducer, {});
  const { userState } = useAuth();

  const createOrder = async (order) => {
    try {
      orderDispatch({
        type: "ORDER_CREATE_REQUEST",
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userState.userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/orders`, order, config);

      orderDispatch({
        type: "ORDER_CREATE_SUCCESS",
        payload: data,
      });

      return data;
    } catch (error) {
      orderDispatch({
        type: "ORDER_CREATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      return false;
    }
  };

  const listMyOrders = async () => {
    try {
      myOrdersDispatch({
        type: "LIST_MY_ORDERS_REQUEST",
      });

      const config = {
        headers: {
          Authorization: `Bearer ${userState.userInfo.token}`,
        },
      };

      const { data } = await axios.get(`/api/orders/myorders`, config);

      myOrdersDispatch({
        type: "LIST_MY_ORDERS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      myOrdersDispatch({
        type: "LIST_MY_ORDERS_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const value = {
    orderState,
    orderDispatch,
    createOrder,
    orderSucess: orderState.success,
    myOrdersState,
    myOrdersDispatch,
    listMyOrders,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
