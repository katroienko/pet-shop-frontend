
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Form from "../../Form/Form";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectTotalCartItems } from "../../../redux/cart/cart-selectors";

import styles from "./styles";


const CartCheckout = ({ totalPrice, onOrderPlaced }) => {
  const totalitems = useSelector(selectTotalCartItems)
  return (
    <Box sx={styles.wrapper}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "var(--font-family)",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "110%",
          color: "#282828",
        }}
      >
        Order details
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "130%",
          color: "#8b8b8b",
        }}
      >
        {totalitems} items
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "130%",
          color: "#8b8b8b",
        }}
      >
        Total price: {totalPrice}
      </Typography>

      {/* <Link to="/checkout">
          <Button variant="contained" color="success">
            To checkout
          </Button>
        </Link> */}
      <Form onOrderPlaced={onOrderPlaced} />
    </Box>
  )
};

export default CartCheckout;