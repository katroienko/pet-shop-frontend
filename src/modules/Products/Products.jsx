import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import ProductsSearch from "./ProductsSearch/ProductsSearch";
import ProductList from "./ProductList/ProductList";
import { getProductsAll } from "../../shared/api/products-api";

import styles from "./Products.module.css";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const params = Object.fromEntries([...searchParams]);
        console.log(params);
        
      const response = await getProductsAll(params);
      console.log(response);
      
      setItems(response.data?.data || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onSearch = useCallback((filters) => {
    setSearchParams(filters);
  }, [setSearchParams]);



  return (
    <div>
      <ProductsSearch submitForm={onSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <ProductList items={items} />
    </div>
  );
};

export default Products;

