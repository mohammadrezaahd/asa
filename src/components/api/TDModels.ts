import environments from "@/helpers/configurations";
import { ITDModelCreate } from "@/interfaces/DTOs/tDModels";
import axios from "axios";

const API_URL = environments.uri.api_url;

const createNewModel = async (data: ITDModelCreate) => {
  try {
    const { file, title, position, rotation, scale, thumbnail, lights } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("position", JSON.stringify(position));
    formData.append("rotation", JSON.stringify(rotation));
    formData.append("scale", JSON.stringify(scale));
    formData.append("thumbnail", thumbnail);
    formData.append("lights", JSON.stringify(lights));

    const response = await axios.post(`${API_URL}/tdm`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      console.log(response.data.message);
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Model creation failed");
    }
  } catch (err) {
    console.error("Error creating table", err);
  }
};

export const TDModelsApi = { createNewModel };
