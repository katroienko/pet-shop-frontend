import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// import Pagination from "../../../Pagination/Pagination";
import Pagination from "../../../shared/components/Pagination/Pagination";
import ProductListPagination from "./ProductListPagination/ProductListPagination";

import ProductListItem from "./ProductListItem/ProductListItem";

import { addToCart } from "../../../redux/cart/cart-actions";

import styles from "./ProductList.module.css";

const PER_PAGE = 10;

const ProductList = ({ items = [] }) => {
  console.log(items);

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const onAddProductToCart = useCallback(
    (payload) => {
      dispatch(addToCart(payload));
    },
    [dispatch]
  );
  const elements = items
    .slice(PER_PAGE * (currentPage - 1), PER_PAGE * currentPage)
    .map((item) => (
      <ProductListItem
        onAddProductToCart={onAddProductToCart}
        key={item.id}
        {...item}
      />
    ));

  return (
    <div>
      <ul className={styles.list}>{elements}</ul>
      <Pagination
        perPage={PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={items.length}
        render={({ totalPages, onPrevPage, onNextPage }) => (
          <ProductListPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
          />
        )}
      />
    </div>
  );
};

export default ProductList;
