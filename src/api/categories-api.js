import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getCategoriesAllApi = requestDecorator(async () => {
    const { data } = await backendInstance.get("/categories/all");
    return data;
});

// export const getCategorieById = requestDecorator(async (id) => {
//     const { data } = await backendInstance.get(`/categories/${id}`);
//     return data;
// });

// export const getCategorieById = requestDecorator(async (id, params = {}) => {
//   const { data } = await backendInstance.get(`/categories/${id}`, {
//     params,
//   });
//   return data;
// });

// export const getCategorieById = requestDecorator(async (id, params = {}) => {
//   // Вивід базового URL, шляху та параметрів
//   const baseUrl = backendInstance.defaults.baseURL || "";
//   const url = new URL(`/categories/${id}`, baseUrl);

//   Object.entries(params).forEach(([key, value]) => {
//     if (value !== undefined && value !== null) {
//       url.searchParams.append(key, value);
//     }
//   });

//   // Логування повного URL з параметрами
//   console.log("➡️ Запит на бекенд:", url.toString());

//   const { data } = await backendInstance.get(`/categories/${id}`, {
//     params,
//   });

//   return data;
// });

export const getCategorieById = requestDecorator(async (id, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  console.log("➡️ GET /categories/" + id + "?" + queryString); // 🔍 Лог повного URL
  const { data } = await backendInstance.get(`/categories/${id}`, {
    params,
  });
  return data;
});
