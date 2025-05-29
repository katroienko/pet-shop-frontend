import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AllsalesPage from "./pages/allsalesPage/allsalesPage";
import CategoriesPage from "./pages/categoriesPage/categoriesPage";
// import OneCategoryPage from "./components/Categories/OneCategoryPage/OneCategoryPage";
import OneCategoryPage from "./pages/OneCategoryPage/OneCategoryPage";
import OneProductPage from "./pages/OneProductPage/OneProductPage";

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