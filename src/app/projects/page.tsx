import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import AppData from "@/data/app.json";
import PageBanner from "@/components/templates/sections/PageBanner";
import { getSortedProjectsData } from "@/utils/projects";

// Types for props (should match ProjectsMasonry)

type Category = {
  name: string;
  slug: string;
};

type Project = {
  id: string | number;
  title: string;
  image: string;
  category: string;
  category_slug: string;
  orientation: "vertical" | "horizontal" | string;
};

type ProjectsMasonryProps = {
  projects: Project[];
  categories: Category[];
};

const ProjectsMasonry = dynamic<ProjectsMasonryProps>(
  () => import("@/components/templates/sections/ProjectsMasonry"),
  { ssr: false }
);

export const metadata = {
  title: {
    default: "Projects",
  },
  description: AppData.settings.siteDescription,
};

async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <PageBanner
        pageTitle={"Projects"}
        breadTitle={"Projects"}
        bgImage={"/img/photo/12.jpg"}
      />

      {/* portfolio */}
      <section>
        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center">
            <p className="mil-text-lg mil-up mil-mb-90">
              Our Projects harness design and technology to create places where{" "}
              <br /> people live, work, and heal.
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsMasonry
              projects={projects}
              categories={AppData.projects.categories as Category[]}
            />
          </Suspense>
        </div>
      </section>
      {/* portfolio end */}
    </>
  );
}
export default Projects;

async function getAllProjects(): Promise<Project[]> {
  const allProjects = getSortedProjectsData() as Project[];
  return allProjects;
}
