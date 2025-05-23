import {
  ADD_TO_CART,
  INSREASE_COUNT_IN_CART,
  DESREASE_COUNT_IN_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from "./cart-types";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const increaseCountInCart = (payload) => ({
  type: INSREASE_COUNT_IN_CART,
  payload,
});

export const decreaseCountInCart = (payload) => ({
  type: DESREASE_COUNT_IN_CART,
  payload,
});

export const deleteFromCart = (payload) => ({
  type: DELETE_FROM_CART,
  payload,
});

export const clearCart = ()=> ({
    type: CLEAR_CART,
});