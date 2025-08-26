import environments from "@/helpers/configurations";
import { IUserGet } from "@/interfaces/DTOs/users";
import { IApiResponse } from "@/interfaces/global/apiResponse";
import axios from "axios";

const API_URL = environments.uri.api_url;

const getUsers = async (): Promise<IApiResponse<IUserGet[]>> => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
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
    throw err;
  }
};

const getLoggedInUser = async (): Promise<IApiResponse<[]>> => {
  try {
    const response = await axios.get(`${API_URL}/auth/status`, {
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
    throw err;
  }
};

export const UsersApi = { getUsers, getLoggedInUser };
