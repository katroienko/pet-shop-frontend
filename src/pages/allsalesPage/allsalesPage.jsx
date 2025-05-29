import ProductsSale from "../../shared/components/ProductsSale/ProductsSale"
import PageLayout from "../../shared/components/PageLayout/PageLayout"
import Title from "../../shared/components/Title/Title"

function allsalesPage() {
  return (
    <>
      <PageLayout>
        <Title>Sale</Title>
        <ProductsSale />
      </PageLayout>
    </>
  )
}

export default allsalesPage