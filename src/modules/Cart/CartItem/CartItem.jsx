import { memo } from "react";
import { Link } from "react-router-dom";
import { backendInstance } from "../../../shared/api/backendInstance";
import styles from './CartItem.module.css'

const CartItem = ({
  id,
  image,
  title,
  price,
  discont_price,
  count,
  onIncreaseCart,
  onDecreaseCart,
  onDeleteFromCart,
}) => {
  console.log(`render ${title}`);

  const imageUrl = image.startsWith("http")
    ? image
    : `${backendInstance.defaults.baseURL}${image}`;

  return (
    <>
      <div className={styles.cartItemWrapper}>

        <div className={styles.linkWrapper}>
          <Link to={`/products/${id}`} className={styles.link}>
            <img src={imageUrl} alt="product" className={styles.imgFluid} />
          </Link>
        </div>
        <div className={styles.informationWrapper}>
          <div className={styles.titleWpapper}>
            <p>{title}</p>
            <button
              className={styles.button}
              onClick={() => onDeleteFromCart(id)}
              aria-label="Remove from cart"
              title="Remove from cart"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#282828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="#282828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionButtons}>
              <button
                className={styles.button2}
                onClick={() => onDecreaseCart(id)}
                aria-label="Decrease quantity"
                title="Decrease quantity"
              >
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H15" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <span className={styles.count}>{count}</span>
              <button
                className={styles.button2}
                onClick={() => onIncreaseCart(id)}
                aria-label="Increase quantity"
                title="Increase quantity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 5V19" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <span className={styles.totalPrice}>{(price * count).toFixed(2)}</span>
            <span className={styles.discount}>{(discont_price * count).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CartItem);

