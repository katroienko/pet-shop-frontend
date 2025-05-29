import { useSelector } from "react-redux";

import { selectTotalCartItems, selectTotalCartPrice } from "../../../redux/cart/cart-selectors";

import styles from "./HeaderCart.module.css";

const  HeaderCart = () => {
  const totalItems = useSelector(selectTotalCartItems);
  // const totalPrice = useSelector(selectTotalCartPrice);

  return (
    <p>
      <span>Total products: {totalItems}.</span>
      {/* <span>Total price: {totalPrice}.</span> */}
    </p>
  );
};

export default HeaderCart;
