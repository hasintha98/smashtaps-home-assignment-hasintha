import { AxiosError } from "axios";
import { axiosInstance } from "../common/AxiosInstance.tsx";
import { API_PATHS } from "../common/const.tsx";
import { Product } from "../common/Interfaces.tsx";

// Function to get categories
export const CategoryService = {
  getCategories: async (): Promise<string[]> => {
    try {
      const response = await axiosInstance.get(API_PATHS.CATEGORIES);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error("An unexpected error occurred");
    }
  },
  // Function to get products based on category
  getProducts: async (category: any): Promise<Product[]> => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.GET_PRODUCTS(category)
      );
      return response.data.products;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error("An unexpected error occurred");
    }
  },
};
