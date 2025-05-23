export const selectCart = store => store.cart;

export const selectTotalCartItems = store => {
    return store.cart.reduce((acum, item)=> acum + item.count, 0);
};

export const selectTotalCartPrice = store => {
    return store.cart.reduce((acum, item)=> acum + item.count * item.price, 0).toFixed(2);
};

export const selectCartItemCount = (store, productId) => {
  const item = store.cart.find(i => i.id === productId);
  return item ? item.count : 0;
};