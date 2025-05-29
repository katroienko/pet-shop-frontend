import PageLayout from "../../shared/components/PageLayout/PageLayout";

// import Products from "../../shared/components/Products/Products";
import Products from "../../modules/Products/Products";
import Title from "../../shared/components/Title/Title";

const ProductsPage = () => {
  return (
    <PageLayout title="Products page">
      <Title>All products</Title>
      <Products />
    </PageLayout>
  );
};

export default ProductsPage;
