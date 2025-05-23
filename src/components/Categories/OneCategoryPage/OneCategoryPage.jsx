
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cart-actions";

import { getCategorieById } from "../../../api/categories-api";


import ProductListItem from "../../Products/ProductList/ProductListItem/ProductListItem";
import Title from "../../Title/Title";
import PageLayout from "../../PageLayout/PageLayout";
import ProductsSearch from "../../Products/ProductsSearch/ProductsSearch";

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
      console.log("🔍 Filters:", filters); // 👉 додай цей log

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



// import { useParams, useSearchParams } from "react-router-dom";
// import { useEffect, useState, useCallback } from "react";
// import { useDispatch } from "react-redux";

// import { getCategorieById } from "../../../api/categories-api";
// // import { addToCart } from "../../../store/cart/cartSlice";

// import ProductListItem from "../../Products/ProductList/ProductListItem/ProductListItem";
// import Title from "../../Title/Title";
// import PageLayout from "../../PageLayout/PageLayout";
// import ProductsSearch from "../../Products/ProductsSearch/ProductsSearch";

// import styles from './OneCategoryPage.module.css';

// const OneCategoryPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const [searchParams, setSearchParams] = useSearchParams();

//   const [category, setCategory] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchCategoryProducts = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const filters = Object.fromEntries([...searchParams]);
//       const response = await getCategorieById(id, filters);
//       setCategory(response.data.data.category);
//       setProducts(response.data.data.products);
//     } catch (err) {
//       setError("Failed to load category");
//     } finally {
//       setLoading(false);
//     }
//   }, [id, searchParams]);

//   useEffect(() => {
//     fetchCategoryProducts();
//   }, [fetchCategoryProducts]);

//   const onAddProductToCart = useCallback((payload) => {
//     dispatch(addToCart(payload));
//   }, [dispatch]);

//   const onSearch = useCallback((filters) => {
//     setSearchParams(filters);
//   }, [setSearchParams]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!category) return null;

//   return (
//     <PageLayout>
//       <Title>{category.title}</Title>
//       <ProductsSearch submitForm={onSearch} />
//       <ul className={styles.list}>
//         {products.map((product) => (
//           <ProductListItem
//             key={product.id}
//             {...product}
//             onAddProductToCart={onAddProductToCart}
//           />
//         ))}
//       </ul>
//     </PageLayout>
//   );
// };

// export default OneCategoryPage;





// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getCategorieById } from "../../../api/categories-api";
// import { backendInstance } from "../../../api/backendInstance";
// import { useDispatch } from "react-redux";
// import { useCallback } from "react";

// import ProductListItem from "../../Products/ProductList/ProductListItem/ProductListItem";
// import Title from "../../Title/Title";
// import PageLayout from "../../PageLayout/PageLayout";
// import ProductsSearch from "../../Products/ProductsSearch/ProductsSearch";

// import styles from './OneCategoryPage.module.css';

// const OneCategoryPage = () => {
//   const { id } = useParams();
//   const [categoryData, setCategoryData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await getCategorieById(id);
//         setCategoryData(response.data.data);
//       } catch (err) {
//         setError("Failed to load category");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategory();
//   }, [id]);

//   const dispatch = useDispatch();

//   const onAddProductToCart = useCallback(
//     (payload) => {
//       dispatch(addToCart(payload));
//     },
//     [dispatch]
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!categoryData) return null;

//   const { category, products } = categoryData;
//   const baseUrl = backendInstance.defaults.baseURL;
//   const elements = products.map((product) => (
//     <ProductListItem
//       key={product.id}
//       {...product}
//       onAddProductToCart={onAddProductToCart}
//     />
//   ))


//   return (
//     <PageLayout>
//       <Title>{category.title}</Title>
//       <ProductsSearch submitForm={onSearch}/>
//       <ul className={styles.list}>{elements}</ul>
//     </PageLayout>
//   );
// };

// export default OneCategoryPage;



