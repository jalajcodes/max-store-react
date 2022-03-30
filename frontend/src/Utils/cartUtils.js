const getPriceInfo = (cartItems) => {
  return cartItems.reduce(
    ({ total, discount, qty }, item) => {
      total += item.price * item.qty;
      qty += item.qty;
      return { total, discount, qty };
    },
    {
      total: 0,
      discount: 1000, // keeping it hardcoded for now
      qty: 0,
    }
  );
};
export { getPriceInfo };
