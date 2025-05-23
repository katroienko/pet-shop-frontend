import styles from './BtnBanner.module.css';

export const BtnBanner = ({
  text,
  width,
  height,
  fontSize,
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      className={`${styles.btnBanner} ${className}`}
      style={{ width, height }}
    >
      <div className={styles.addToCart} style={{ fontSize }}>
        {text}
      </div>
    </button>
  );
};


// import styles from './BtnBanner.module.css';


// export const BtnBanner = ({ property, className, type = 'button'}) => {
//   return (
//     <button type={type} className={`${styles.btnBanner} ${className || ''}`}>
//       <div className={styles.addToCart}>Get a discount</div>
//     </button>
//   );
// };