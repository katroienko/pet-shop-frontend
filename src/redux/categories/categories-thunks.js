import { getCategoriesAllApi } from "../../shared/api/categories-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await getCategoriesAllApi();
    return response.data;
  }
);
