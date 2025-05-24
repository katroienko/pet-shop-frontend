import ProductsSale from "../../components/ProductsSale/ProductsSale"
import PageLayout from "../../components/PageLayout/PageLayout"
import Title from "../../components/Title/Title"

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