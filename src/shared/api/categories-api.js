import { backendInstance } from './backendInstance';

import requestDecorator from './requestDecorator';

export const getCategoriesAllApi = requestDecorator(async () => {
    const { data } = await backendInstance.get("/categories/all");
    return data;
});


export const getCategorieById = requestDecorator(async (id, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  console.log("➡️ GET /categories/" + id + "?" + queryString); // 🔍 Лог повного URL
  const { data } = await backendInstance.get(`/categories/${id}`, {
    params,
  });
  return data;
});
