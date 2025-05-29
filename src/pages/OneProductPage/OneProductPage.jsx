import { memo, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { backendInstance } from "../../shared/api/backendInstance";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
  addToCart,
} from "../../redux/cart/cart-actions";
import { selectCartItemCount } from "../../redux/cart/cart-selectors";
import styles from "./OneProductPage.module.css";
import { OneProductView } from "../../components/OneProductView/OneProductView";

import PageLayout from '../../components/PageLayout/PageLayout'

const OneProductPage = () => {
  const { id } = useParams();
  const productId = Number(id);

  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const count = useSelector((state) => selectCartItemCount(state, productId));

  const onAddProductToCart = useCallback(
    (payload) => {
      dispatch(addToCart(payload));
    },
    [dispatch]
  );

  const onIncreaseCart = useCallback(() => {
    dispatch(increaseCountInCart(productId));
  }, [dispatch, productId]);

  const onDecreaseCart = useCallback(() => {
    dispatch(decreaseCountInCart(productId));
  }, [dispatch, productId]);

  const onDeleteFromCart = useCallback(() => {
    dispatch(deleteFromCart(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    setLoading(true);
    backendInstance
      .get(`/products/${productId}`)
      .then(({ data }) => {
        if (Array.isArray(data)) {
          setProduct(data[0]);
        } else {
          setProduct(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Can not dounlaud");
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className={styles.status}>Louding...</p>;
  if (error) return <p className={styles.statusError}>{error}</p>;
  if (!product) return <p className={styles.statusError}>Product not found</p>;

  return (
    <PageLayout>
      <OneProductView
        product={product}
        count={count}
        onAddProductToCart={onAddProductToCart}
        onIncreaseCart={onIncreaseCart}
        onDecreaseCart={onDecreaseCart}
        onDeleteFromCart={onDeleteFromCart}
      />
    </PageLayout>
  );
};

export default memo(OneProductPage);



// import { memo, useState, useEffect, useCallback } from "react";
// import { useParams, Link } from "react-router-dom";
// import { backendInstance } from "../../api/backendInstance";
// import styles from "./OneProductPage.module.css";
// import {
//   increaseCountInCart,
//   decreaseCountInCart,
//   deleteFromCart,
//   addToCart,
// } from "../../redux/cart/cart-actions";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCartItemCount } from "../../redux/cart/cart-selectors";

// import { BtnBlue } from "../../components/BtnBlue/BtnBlue";

// const OneProductPage = () => {
//   const { id } = useParams();
//   const productId = Number(id);

//   const dispatch = useDispatch();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const count = useSelector((state) => selectCartItemCount(state, productId));

//   const onAddProductToCart = useCallback(
//       (payload) => {
//         dispatch(addToCart(payload));
//       },
//       [dispatch]
//     );

//   useEffect(() => {
//     setLoading(true);
//     backendInstance
//       .get(`/products/${productId}`)
//       .then(({ data }) => {
//         if (Array.isArray(data)) {
//           setProduct(data[0]);
//         } else {
//           setProduct(data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Не удалось загрузить товар");
//         setLoading(false);
//       });
//   }, [productId]);

//   const onIncreaseCart = useCallback(() => {
//     dispatch(increaseCountInCart(productId));
//   }, [dispatch, productId]);

//   const onDecreaseCart = useCallback(() => {
//     dispatch(decreaseCountInCart(productId));
//   }, [dispatch, productId]);

//   const onDeleteFromCart = useCallback(() => {
//     dispatch(deleteFromCart(productId));
//   }, [dispatch, productId]);

//   if (loading) {
//     return <p className={styles.status}>Загрузка...</p>;
//   }

//   if (error) {
//     return <p className={styles.statusError}>{error}</p>;
//   }

//   if (!product) {
//     return <p className={styles.statusError}>Товар не найден</p>;
//   }

//   const { image, title, price, discount_price } = product;

//   const imageUrl =
//     image && image.startsWith("http")
//       ? image
//       : `${backendInstance.defaults.baseURL}${image}`;

//   return (
//     <div className={styles.cartItemWrapper}>
//       <div className={styles.linkWrapper}>
//         <Link to={`/products/${productId}`} className={styles.link}>
//           <img src={imageUrl} alt={title} className={styles.imgFluid} />
//         </Link>
//       </div>
//       <div className={styles.informationWrapper}>
//         <div className={styles.titleWrapper}>
//           <p className={styles.title}>{title}</p>
//           <button
//             className={styles.button}
//             onClick={onDeleteFromCart}
//             aria-label="Remove from cart"
//             title="Remove from cart"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 6L6 18M6 6L18 18"
//                 stroke="#282828"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className={styles.actions}>
//           <div className={styles.actionButtons}>
//             <button
//               className={styles.button2}
//               onClick={onDecreaseCart}
//               aria-label="Decrease quantity"
//               title="Decrease quantity"
//             >
//               <svg
//                 width="16"
//                 height="2"
//                 viewBox="0 0 16 2"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1 1H15"
//                   stroke="#8B8B8B"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//             <span className={styles.count}>{count}</span>
//             <button
//               className={styles.button2}
//               onClick={onIncreaseCart}
//               aria-label="Increase quantity"
//               title="Increase quantity"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M5 12H19"
//                   stroke="#8B8B8B"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M12 5V19"
//                   stroke="#8B8B8B"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//           <BtnBlue
//             text='Add to cart'
//             className={styles.btCartOneProduct}
//             type='submit'
//             onClick={() => onAddProductToCart(product)} />
//           <span className={styles.totalPrice}>
//             {(price * count).toFixed(2)}
//           </span>
//           <span className={styles.discount}>
//             {(discount_price * count).toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(OneProductPage);

