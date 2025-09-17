"use client";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AppData from "@/data/app.json";
import PageBanner from "@/components/templates/sections/PageBanner";
import { TDModelsApi } from "@/components/api/TDModels.api";
import { ITDModelBase } from "@/interfaces/DTOs/tDModels";

// Types for props (should match ProjectsMasonry)

type Category = {
  name: string;
  slug: string;
};

type ProjectsMasonryProps = {
  projects: ITDModelBase[];
  categories: Category[];
};

const ProjectsMasonry = dynamic<ProjectsMasonryProps>(
  () => import("@/components/templates/sections/ProjectsMasonry"),
  { ssr: false }
);

function Projects() {
  const [projects, setProjects] = useState<ITDModelBase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await TDModelsApi.getModels();
        // Transform API data to match the expected Project type
        if (res.data) {
          setProjects(res.data);
        }
        console.log("Fetched projects:", res);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <>
        <PageBanner
          pageTitle={"Projects"}
          breadTitle={"Projects"}
          bgImage={"/img/photo/12.jpg"}
        />
        <section>
          <div className="container mil-p-120-120">
            <div className="mil-background-grid mil-softened" />
            <div className="mil-center">
              <p className="mil-text-lg mil-up mil-mb-90">
                Loading projects...
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

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
