import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/categories/categories-thunks";

import Loader from "../Loader/Loader";
import LoadingError from "../LoadingError/LoadingError";
import CategoriCart from "../CategoriCart/CategoriCart";
import Title from "../../../shared/components/Title/Title";
import { Link } from "react-router-dom";

import styles from "./Categories.module.css";

function Categories() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = items?.data || [];

  const elements = categories.map((item) => (
    <Link to={`/categories/${item.id}`} key={item.id}>
      <CategoriCart {...item} />
    </Link>
  ));

  return (
    <div className={styles.container}>
      <Title>Categories</Title>
      <div>
        {loading && <Loader />}
        {error && <LoadingError>{error}</LoadingError>}
        {categories.length > 0 && (
          <div className={styles.sectionCategorie}>{elements}</div>
        )}
      </div>
    </div>
  );
}

export default Categories;

