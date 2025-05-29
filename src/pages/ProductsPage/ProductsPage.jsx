import PageLayout from "../../shared/components/PageLayout/PageLayout";
import Products from "../../modules/Products/Products";
import Title from "../../shared/components/Title/Title";
import { Breadcrumbs } from "../../shared/components/Breadcrumbs/Breadcrumbs";

const ProductsPage = () => {
  return (
    <PageLayout title="Products page">
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Products' },
        ]}
      />
      <Title>All products</Title>
      <Products />
    </PageLayout>
  );
};

export default ProductsPage;
