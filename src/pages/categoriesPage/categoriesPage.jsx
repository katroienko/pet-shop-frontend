import Categories from "../../shared/components/Categories/Categories"
import PageLayout from "../../shared/components/PageLayout/PageLayout"

import { Breadcrumbs } from "../../shared/components/Breadcrumbs/Breadcrumbs"

function CategoriesPage() {
  return (
    <PageLayout>
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories'},
        ]}
      />
      <Categories />
    </PageLayout>
  )
}

export default CategoriesPage