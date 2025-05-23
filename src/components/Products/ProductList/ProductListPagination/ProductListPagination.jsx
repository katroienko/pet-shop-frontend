import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import styles from "./ProductListPagination.module.css";

const ProductListPagination = ({ totalPages, onPrevPage, onNextPage, setCurrentPage, currentPage })=> {
    const paginationElements = Array(totalPages)
    .fill()
    .map((_, index) => {
      const pageNumber = index + 1;
      return (
        <div
        className={pageNumber === currentPage ? styles.active : ""}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </div>
      );
    });

    return (
      <div className={styles.pagination}>
        <IconButton onClick={onPrevPage}>
          <ArrowBackIosNewOutlinedIcon />
        </IconButton>  
        {paginationElements}
        <IconButton onClick={onNextPage}>
          <ArrowForwardIosOutlinedIcon />
        </IconButton>
      </div>
    )
}

export default ProductListPagination;