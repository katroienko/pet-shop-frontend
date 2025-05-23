import PageLayout from "../../components/PageLayout/PageLayout";

import Products from "../../components/Products/Products";
import Title from "../../components/Title/Title";

const ProductsPage = () => {
  return (
    <PageLayout title="Products page">
      <Title>All products</Title> 
      <Products />
    </PageLayout>
  );
};

export default ProductsPage;
