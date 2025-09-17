"use client";

import React, { useEffect, useState } from "react";
import { ProjectsApi } from "@/components/api/Projects.api";
import ProjectsMasonry from "@/components/templates/sections/ProjectsMasonry";
import AppData from "@/data/app.json";

type Category = {
  name: string;
  slug: string;
};

type Project = {
  _id: string;
  title: string;
  image: string;
  category: string;
  category_slug: string;
  orientation: "vertical" | "horizontal" | string;
};

const ProjectsClient = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await ProjectsApi.getProjects();
        const formattedProjects = response.data.map((project) => ({
          _id: project._id,
          title: project.title,
          image: project.image,
          category: project.category,
          category_slug: project.category_slug,
          orientation: project.orientation || "horizontal",
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <ProjectsMasonry
      projects={projects}
      categories={AppData.projects.categories as Category[]}
    />
  );
};

export default ProjectsClient;
