import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createNewModel = async (title: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const response = await axios.post(`${API_URL}/createTable`, formData, {
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
