import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCategories}  from "../../redux/categories/categoriesThunk";

import Loader from "../Loader/Loader";
import LoadingError from "../LoadingError/LoadingError";
import CategoriCart from "../CategoriCart/CategoriCart";
import Title from "../../components/Title/Title";
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



// import Loader from "../Loader/Loader"
// import LoadingError from "../LoadingError/LoadingError"
// import CategoriCart from "../CategoriCart/CategoriCart"
// import useFetch from "../../hooks/useFetch"
// import Title from "../../components/Title/Title"

// import { getCategoriesAllApi } from "../../api/categories-api"
// import { Link } from "react-router-dom"

// import styles from './Categories.module.css'

// function Categories() {
// const {
//   data: { data: categoris },
//   loading,
//   error,
// } = useFetch({
//   request: getCategoriesAllApi,
//   initialData: { data: [] },
// });

//   const elements = categoris.map((item) => (
//     <Link to= {`/categories/${item.id}`}>
//       <CategoriCart key={item.id} {...item} />
//     </Link>
//   ));
// //  console.log(elements);
 
//   return (
//     <div className={styles.container}>
//             <Title>Categories</Title>
//          <div >
//           {loading && <Loader />}
//           {error && <LoadingError>{error}</LoadingError>}
//           {Boolean(categoris.length) && (
//                     <div className={styles.sectionCategorie} >{elements}
//           </div>
//                   )}
//       </div>
//     </div>
//   )
// }

// export default Categories

