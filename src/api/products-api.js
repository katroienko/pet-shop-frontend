// import axios from "axios";

// const productsInstance = axios.create({
//     baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products"
// })

// export const getProductsAll = async(params = {})=> {
//     const {data} = await productsInstance.get("/", {
//         params,
//     });
//     return data;
// }

///////////////
// import { backendInstance } from './backendInstance';

// import requestDecorator from './requestDecorator';

// export const getProductById = requestDecorator(async (id) => {
//     const { data } = await backendInstance.get(`/products/${id}`);
//     return data;
// });

// export const getProductsAll = requestDecorator(async () => {
//     const { data } = await backendInstance.get("/products/all");
//     return data;
// });


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
