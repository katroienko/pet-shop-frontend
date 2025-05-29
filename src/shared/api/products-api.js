import { backendInstance } from './backendInstance';
import requestDecorator from './requestDecorator';

export const getProductById = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/products/${id}`);
    return data;
});

// Тепер getProductsAll приймає параметри
export const getProductsAll = requestDecorator(async (params = {}) => {
    // Логуємо рядок запиту
    const queryString = new URLSearchParams(params).toString();
    console.log("GET /products/all?" + queryString);

    const { data } = await backendInstance.get("/products/all", {
        params,
    });

    return data;
});
