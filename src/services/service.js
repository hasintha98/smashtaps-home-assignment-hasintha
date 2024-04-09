import { axiosInstance } from "../common/AxiosInstance";
import { API_PATHS } from "../common/const";

export const CategoryService = {
  getCategories: async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.CATEGORIES);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getProducts: async (category) => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.GET_PRODUCTS(category)
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
