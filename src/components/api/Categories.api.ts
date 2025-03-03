import environments from "@/helpers/configurations";
import { ICategoryCreate } from "@/interfaces/DTOs/categories";
import axios from "axios";

const API_URL = environments.uri.api_url;

const createNewCategory = async (data: ICategoryCreate) => {
  try {
    const response = await axios.post(`${API_URL}/category`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log(response.data.message);
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Category creation failed");
    }
  } catch (err) {
    console.error("Error creating category", err);
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Failed to fetch categories");
    }
  } catch (err) {
    console.error("Error fetching categories", err);
  }
};

export const CategoriesApi = { createNewCategory, getCategories };
