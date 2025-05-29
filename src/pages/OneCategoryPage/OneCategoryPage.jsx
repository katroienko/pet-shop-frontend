import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart-actions";
import { getCategorieById } from "../../shared/api/categories-api";
import { Breadcrumbs } from "../../shared/components/Breadcrumbs/Breadcrumbs";

import ProductListItem from "../../modules/Products/ProductList/ProductListItem/ProductListItem";
import Title from "../../shared/components/Title/Title";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
import ProductsSearch from "../../modules/Products/ProductsSearch/ProductsSearch";

import styles from './OneCategoryPage.module.css';

const OneCategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchCategoryProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const filters = Object.fromEntries([...searchParams]);
      console.log("🔍 Filters:", filters);

      const response = await getCategorieById(id, filters);
      setCategory(response.data.data.category);
      setProducts(response.data.data.products);
    } catch (err) {
      setError("Failed to load category");
    } finally {
      setLoading(false);
    }
  }, [id, searchParams]);

  useEffect(() => {
    fetchCategoryProducts();
  }, [fetchCategoryProducts]);

  const onAddProductToCart = useCallback((payload) => {
    dispatch(addToCart(payload));
  }, [dispatch]);

  const onSearch = useCallback((filters) => {
    setSearchParams(filters);
  }, [setSearchParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!category) return null;

  return (
    <PageLayout>
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/categories' },
          { label: category?.title },
        ]}
      />
      <Title>{category.title}</Title>
      <ProductsSearch submitForm={onSearch} />
      <ul className={styles.list}>
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            {...product}
            onAddProductToCart={onAddProductToCart}
          />
        ))}
      </ul>
    </PageLayout>
  );
};

export default OneCategoryPage;


