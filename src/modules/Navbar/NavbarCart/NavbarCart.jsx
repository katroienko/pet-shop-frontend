import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectTotalCartItems } from "../../../redux/cart/cart-selectors"
import EmptyCart from "../../../assets/EmptyCart"

import styles from './NavbarCart.module.css'


function NavbarCart() {
  const numberCart = useSelector(selectTotalCartItems)
  return (
    <>
      <div className={styles.cartWrapper}>
        <Link to="/cart">
          <EmptyCart  />
        </Link>
        <div className={styles.numberWrapper}>
          {numberCart}
        </div>
      </div>

    </>
  )
}

export default NavbarCart