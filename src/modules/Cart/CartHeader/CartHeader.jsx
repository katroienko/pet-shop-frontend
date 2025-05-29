import { memo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../../../shared/components/Title/Title";

import styles from "./styles";

const CartHeader = ({ onClearCart }) => {
  return (
    <Box sx={styles.wrapper}>
     <Title> Shoping cart</Title>
      <Button onClick={onClearCart} variant="text">
        Clear cart
      </Button>
    </Box>
  );
};

export default memo(CartHeader);
