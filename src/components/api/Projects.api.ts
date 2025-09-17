import environments from "@/helpers/configurations";
import {
  IProjectBase,
  IProject,
  IProjectCreate,
} from "@/interfaces/DTOs/projects";
import { IApiResponse } from "@/interfaces/global/apiResponse";
import axios from "axios";

const API_URL = environments.uri.api_url;

const createNewProject = async (data: IProjectCreate) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Project creation failed");
    }
  } catch (err) {
    console.error("Error creating project", err);
    throw err;
  }
};

const getProjectById = async (id: string): Promise<IApiResponse<IProject>> => {
  try {
    const response = await axios.get(`${API_URL}/projects/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Project retrieval failed");
    }
  } catch (err) {
    console.error("Error retrieving project", err);
    throw err;
  }
};

const getProjects = async (): Promise<IApiResponse<IProjectBase[]>> => {
  try {
    const response = await axios.get(`${API_URL}/projects`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.data.error);
      throw new Error("Projects retrieval failed");
    }
  } catch (err) {
    console.error("Error retrieving projects", err);
    throw err;
  }
};

export const ProjectsApi = { createNewProject, getProjects, getProjectById };
