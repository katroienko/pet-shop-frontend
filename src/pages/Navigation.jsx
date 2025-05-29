import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import ProductsPage from "./ProductsPage/ProductsPage";
import CartPage from "./CartPage/CartPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AllsalesPage from "./allsalesPage/allsalesPage";
import CategoriesPage from "./categoriesPage/categoriesPage";
// import OneCategoryPage from "./components/Categories/OneCategoryPage/OneCategoryPage";
import OneCategoryPage from "./OneCategoryPage/OneCategoryPage";
import OneProductPage from "./OneProductPage/OneProductPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage/>} />
            <Route path="/AllProducts" element={<ProductsPage />} />
            <Route path="/AllSales" element={<AllsalesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/categories/:id" element={<OneCategoryPage />} />
            <Route path="/products/:id" element={<OneProductPage />} />
        </Routes>
    )
}

export default Navigation;