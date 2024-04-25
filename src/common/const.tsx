export const MAIN_API = "https://dummyjson.com";

export const API_PATHS = {
  CATEGORIES: "/products/categories",
  GET_PRODUCTS: (category: string): string => `/products/category/${category}`,
};