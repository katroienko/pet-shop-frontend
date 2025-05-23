import {
  ADD_TO_CART,
  INSREASE_COUNT_IN_CART,
  DESREASE_COUNT_IN_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from "./cart-types";

const cartReducer = (store = [], { type, payload }) => {
    const newStore = store.map((item) => ({ ...item }));
  switch (type) {
    case ADD_TO_CART:
      const product = newStore.find((item) => item.id === payload.id);
      if (product) {
        product.count += 1;
        return newStore;
      }
      return [...newStore, { ...payload, count: 1 }];

    case INSREASE_COUNT_IN_CART:
      const updateProduct = newStore.find((item) => item.id === payload);
      updateProduct.count += 1;
      return newStore;

    case DESREASE_COUNT_IN_CART:
      const descreaseProduct = newStore.find(
        (item) => item.id === payload
      );
      descreaseProduct.count -= 1;
      if (!descreaseProduct.count) {
        return newStore.filter((item) => item.id !== payload);
      }
      return newStore;

    case DELETE_FROM_CART:
        return newStore.filter((item) => item.id !== payload);

    case CLEAR_CART:
        return [];
        
    default:
      return store;
  }
};

export default cartReducer;
