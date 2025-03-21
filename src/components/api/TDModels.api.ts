import environments from "@/helpers/configurations";
import { ITDModelCreate, ITDModelGet } from "@/interfaces/DTOs/tDModels";
import { IApiResponse } from "@/interfaces/global/apiResponse";
import axios from "axios";

const API_URL = environments.uri.api_url;

const createNewModel = async (data: ITDModelCreate) => {
  try {
    const {
      file,
      title,
      position,
      rotation,
      scale,
      thumbnail,
      lights,
      gallery,
      categories,
    } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("position", JSON.stringify(position));
    formData.append("rotation", JSON.stringify(rotation));
    formData.append("scale", scale.toString());
    formData.append("thumbnail", thumbnail);
    formData.append("lights", JSON.stringify(lights));
    gallery.forEach((file) => {
      formData.append(`gallery`, file);
    });
    formData.append("categories", JSON.stringify(categories));

    const response = await axios.post(`${API_URL}/tdm`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Model creation failed");
    }
  } catch (err) {
    console.error("Error creating table", err);
  }
};

const getModels = async (): Promise<IApiResponse<ITDModelGet[]>> => {
  try {
    const response = await axios.get(`${API_URL}/tdm`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Model creation failed");
    }
  } catch (err) {
    console.error("Error creating table", err);
    throw err;
  }
};
export const TDModelsApi = { createNewModel, getModels };
