import { backendInstance } from "../../../../shared/api/backendInstance";
import { BtnBlue } from "../../../BtnBlue/BtnBlue";
import { Link } from "react-router-dom";

import styles from "./ProductListItem.module.css";

const ProductListItem = ({ onAddProductToCart, ...product }) => {
  const { id,image, title, price, discont_price } = product;

  const imageUrl = image.startsWith("http")
    ? image
    : `${backendInstance.defaults.baseURL}${image}`;

  const hasDiscount = discont_price && discont_price < price;

  const truncateTitle = (title, maxLength = 20) => {
    if (title.length <= maxLength) return title;
    return title.slice(0, maxLength) + "...";
  };

  return (
    <li className={styles.card}>
      <Link to={`/products/${id}`} className={styles.linkWrapper}>
        <img
          src={imageUrl}
          alt={title}
          title={title}
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>{truncateTitle(title, 20)}</h3>
        <div className={styles.priceSection}>
          {hasDiscount ? (
            <>
              <span className={styles.discountPrice}>{discont_price} $</span>
              <span className={styles.oldPrice}>{price} $</span>
            </>
          ) : (
            <span className={styles.normalPrice}>{price} $</span>
          )}
        </div>
        <BtnBlue
          text="Add to cart"
          className={styles.btnBlue}
          onClick={() => onAddProductToCart(product)}
        />
      </div>
    </li>
  );
};

export default ProductListItem;




// export default ProductListItem;

// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { backendInstance } from "../../../../api/backendInstance";

// import styles from "./ProductListItem.module.css";

// const ProductListItem = ({ onAddProductToCart, ...product }) => {
//   const { image, title, price, discont_price } = product;

//   const imageUrl = image.startsWith("http")
//     ? image
//     : `${backendInstance.defaults.baseURL}${image}`;

//   const hasDiscount = discont_price && discont_price < price;

//   const truncateTitle = (title, maxLength = 20) => {
//   if (title.length <= maxLength) return title;
//   return title.slice(0, maxLength) + '...';
// };

// return (
//   <li>
//     <Card sx={{ padding: "10px" }}>
//       <CardMedia
//         sx={{ height: 180 }}
//         component="img"
//         image={imageUrl}
//         title={title}
//         alt={title}
//       />

//       <CardContent>
//         <Typography variant="h6">{truncateTitle(title, 20)}</Typography>
//       </CardContent>

//       <CardActions sx={{ justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           {hasDiscount ? (
//             <>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   textDecoration: "line-through",
//                   color: "gray",
//                   marginRight: "8px",
//                 }}
//               >
//                 {price} $
//               </Typography>
//               <Typography variant="h6" color="error">
//                 {discont_price} $
//               </Typography>
//             </>
//           ) : (
//             <Typography variant="h6">{price} $</Typography>
//           )}
//         </div>

//         <IconButton onClick={() => onAddProductToCart(product)}>
//           <ShoppingCartOutlinedIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   </li>
// );
// };

// export default ProductListItem;



// // import Card from "@mui/material/Card";
// // import CardMedia from "@mui/material/CardMedia";
// // import CardContent from "@mui/material/CardContent";
// // import Typography from "@mui/material/Typography";
// // import CardActions from "@mui/material/CardActions";
// // import IconButton from "@mui/material/IconButton";
// // import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// // import { backendInstance } from "../../../../api/backendInstance";

// // import styles from "./ProductListItem.module.css";

// // const ProductListItem = ({ onAddProductToCart, ...product }) => {
// //   const { image, name, price } = product;

// //   const imageUrl = image.startsWith("http")
// //     ? image
// //     : `${backendInstance.defaults.baseURL}${image}`;

// //   return (
// //     <li>
// //       <Card sx={{ padding: "10px" }}>
// //         {/* <CardMedia
// //           sx={{ height: 180 }}
// //           component="img"
// //           image={image}
// //           title={name}
// //           alt={name}
// //         /> */}
// //         <CardMedia
// //           sx={{ height: 180 }}
// //           component="img"
// //           image={imageUrl}
// //           title={name}
// //           alt={name}
// //         />

// //         <CardContent>
// //           <Typography variant="h6">{name}</Typography>
// //         </CardContent>
// //         <CardActions sx={{ justifyContent: "space-between" }}>
// //           <Typography variant="h6">{price} $</Typography>
// //           <IconButton onClick={() => onAddProductToCart(product)}>
// //             <ShoppingCartOutlinedIcon />
// //           </IconButton>
// //         </CardActions>
// //       </Card>
// //     </li >
// //   );
// // };

// // export default ProductListItem;
