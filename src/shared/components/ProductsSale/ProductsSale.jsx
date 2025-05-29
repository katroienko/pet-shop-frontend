import ProductList from "../../../modules/Products/ProductList/ProductList";
import Loader from "../Loader/Loader";
import LoadingError from "../LoadingError/LoadingError";
import useFetch from "../../hooks/useFetch";
import { getProductsAll } from "../../../shared/api/products-api";

function ProductsSale() {
  const {
    data: { data: products },
    loading,
    error,
  } = useFetch({
    request: getProductsAll,
    initialData: { data: [] },
  });

  const discountedProducts = products.filter(
    (item) => item.discont_price && item.discont_price < item.price
  );

  return (
    <div>
      {loading && <Loader />}
      {error && <LoadingError>{error}</LoadingError>}
      {!!discountedProducts.length ? (
        <ProductList items={discountedProducts} />
      ) : (
        !loading && <p>No discounted products available.</p>
      )}
    </div>
  );
}

export default ProductsSale;
