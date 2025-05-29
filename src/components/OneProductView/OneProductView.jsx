import { BtnBlue } from "../BtnBlue/BtnBlue";
import { backendInstance } from "../../shared/api/backendInstance";

import styles from "./OneProductView.module.css";

export const OneProductView = ({
  product,
  count,
  onAddProductToCart,
  onIncreaseCart,
  onDecreaseCart,
  onDeleteFromCart,
}) => {
  const { id, image, title, price, discont_price, description } = product;

  console.log(product);


  const imageUrl =
    image && image.startsWith("http")
      ? image
      : `${backendInstance.defaults.baseURL}${image}`;

  return (
    <div className={styles.cartItemWrapper}>
      <div className={styles.smallImg}>
        <img src={imageUrl} alt={title} />
        <img src={imageUrl} alt={title} />
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <img src={imageUrl} alt={title} className={styles.bigImg} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          {title.length > 20 ? `${title.slice(0, 20)}...` : title}
        </h1>
        <div className={styles.prises}>
          <p className={styles.discountPrice}>${discont_price}</p>
          <p className={styles.prise}>${price}</p>
          <p className={styles.percent}>-{Math.round(((price - discont_price) / price) * 100)}%</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.actionButtons}>
            <button
              className={styles.buttonPlusMinus}
              onClick={onDecreaseCart}
              aria-label="Decrease quantity"
              title="Decrease quantity"
            >
              <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                <path
                  d="M1 1H15"
                  stroke="#8B8B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className={styles.count}>{count}</span>
            <button
              className={styles.buttonPlusMinus}
              onClick={onIncreaseCart}
              aria-label="Increase quantity"
              title="Increase quantity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19"
                  stroke="#8B8B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5V19"
                  stroke="#8B8B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <BtnBlue
            text="Add to cart"
            className={styles.btCartOneProduct}
            type="submit"
            onClick={() => onAddProductToCart(product)}
          />
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          <p>{description}</p>
        </div>

      </div>

    </div>
  );
};
