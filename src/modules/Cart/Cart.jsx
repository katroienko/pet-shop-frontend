import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartHeader from "./CartHeader/CartHeader";
import CartItem from "./CartItem/CartItem";
import CartCheckout from "./CartCheckout/CartCheckout";

import {
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
  clearCart,
} from "../../redux/cart/cart-actions";

import {
  selectCart,
  selectTotalCartPrice,
} from "../../redux/cart/cart-selectors";

import styles from "./Cart.module.css";

const Cart = ({ onOrderPlaced }) => {
  const items = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalCartPrice);

  const dispatch = useDispatch();

  const onClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const onIncreaseCart = useCallback(
    (id) => {
      dispatch(increaseCountInCart(id));
    },
    [dispatch]
  );

  const onDecreaseCart = useCallback(
    (id) => {
      dispatch(decreaseCountInCart(id));
    },
    [dispatch]
  );

  const onDeleteFromCart = useCallback(
    (id) => {
      dispatch(deleteFromCart(id));
    },
    [dispatch]
  );

  const elements = items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onIncreaseCart={onIncreaseCart}
      onDecreaseCart={onDecreaseCart}
      onDeleteFromCart={onDeleteFromCart}
    />
  ));

  return (
    <div className={styles.container}>
      <CartHeader onClearCart={onClearCart} />
      <div className={styles.section}>
        <div className={styles.paper}>{elements}</div>
        <div className={styles.checkoutForm}>
          <CartCheckout totalPrice={totalPrice} onOrderPlaced={onOrderPlaced} />
        </div>
      </div>
    </div>
  );
};

export default Cart;




// import { useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";

// import CartHeader from "./CartHeader/CartHeader";
// import CartItem from "./CartItem/CartItem";
// import CartCheckout from "./CartCheckout/CartCheckout";

// import {
//   increaseCountInCart,
//   decreaseCountInCart,
//   deleteFromCart,
//   clearCart,
// } from "../../redux/cart/cart-actions";

// import {
//   selectCart,
//   selectTotalCartPrice,
// } from "../../redux/cart/cart-selectors";

// const Cart = ({ onOrderPlaced }) => {
//   const items = useSelector(selectCart);
//   const totalPrice = useSelector(selectTotalCartPrice);

//   const dispatch = useDispatch();

//   const onClearCart = useCallback(() => {
//     dispatch(clearCart());
//   }, [dispatch]);

//   const onIncreaseCart = useCallback(
//     (id) => {
//       dispatch(increaseCountInCart(id));
//     },
//     [dispatch]
//   );

//   const onDecreaseCart = useCallback(
//     (id) => {
//       dispatch(decreaseCountInCart(id));
//     },
//     [dispatch]
//   );

//   const onDeleteFromCart = useCallback(
//     (id) => {
//       dispatch(deleteFromCart(id));
//     },
//     [dispatch]
//   );

//   const elements = items.map((item) => (
//     <CartItem
//       key={item.id}
//       {...item}
//       onIncreaseCart={onIncreaseCart}
//       onDecreaseCart={onDecreaseCart}
//       onDeleteFromCart={onDeleteFromCart}
//     />
//   ));

//   return (
//     <Box>
//      <CartHeader onClearCart={onClearCart} />
//       <Paper sx={{ padding: "15px", marginBottom: "25px" }}>{elements}</Paper>
//      <CartCheckout totalPrice={totalPrice} onOrderPlaced={onOrderPlaced}  />
//     </Box>
//   );
// };

// export default Cart;
