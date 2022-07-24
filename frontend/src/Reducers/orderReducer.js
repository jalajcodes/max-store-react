export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case "ORDER_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listMyOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "LIST_MY_ORDERS_REQUEST":
      return {
        loading: true,
      };
    case "LIST_MY_ORDERS_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "LIST_MY_ORDERS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
