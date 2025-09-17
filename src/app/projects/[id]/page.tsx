"use client";
import React, { Suspense, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams } from "next/navigation";

import { ProjectsApi } from "@/components/api/Projects.api";
import { IProject, IProjectBase } from "@/interfaces/DTOs/projects";

import PageBannerTwo from "@/components/templates/sections/PageBannerTwo";
const FullImageSlider = dynamic(
  () => import("@/components/templates/sliders/FullImage"),
  {
    ssr: false,
  }
);

import BenefitsSection from "@/components/templates/sections/Benefits";
import { TDModelsApi } from "@/components/api/TDModels.api";

function ProjectDetail() {
  const params = useParams();
  const [projectData, setProjectData] = useState<IProject | null>(null);
  const [allProjects, setAllProjects] = useState<IProjectBase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof params.id === "string") {
          // Fetch specific project data
          const response = await TDModelsApi.getModelById(params.id);
          const transformedProject: IProject = {
            _id: response.data._id,
            title: response.data.title,
            image: response.data.thumbnail,
            category: "3D Model", // Default category since it's not in ITDModelGet
            category_slug: "3d-model", // Default category slug
            orientation: "horizontal", // Default orientation
            // Transform gallery from string[] to gallery object array
            gallery: response.data.gallery?.map((imageUrl: string) => ({
              image: imageUrl,
              alt: `${response.data.title} gallery image`,
            })),
          };
          setProjectData(transformedProject);

          // Fetch all projects for navigation
          const allProjectsResponse = await ProjectsApi.getProjects();
          setAllProjects(allProjectsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
        setError("Failed to load project data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mil-p-120-120">
        <div className="mil-center">
          <p className="mil-text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !projectData) {
    notFound();
  }

  // prev next navigation
  const prev: { id: string | number; key: number } = { id: 0, key: 0 };
  const next: { id: string | number; key: number } = { id: 0, key: 0 };
  const first: { id: string | number } = { id: 0 };
  const last: { id: string | number } = { id: 0 };

  allProjects.forEach((item: IProjectBase, key: number) => {
    if (item._id == projectData._id) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  });

  allProjects.forEach((item: IProjectBase, key: number) => {
    if (key == prev.key) {
      prev.id = item._id;
    }
    if (key == next.key) {
      next.id = item._id;
    }
    if (key == 0) {
      first.id = item._id;
    }
    if (key == allProjects.length - 1) {
      last.id = item._id;
    }
  });

  if (prev.key == -1) {
    prev.id = last.id;
  }
  if (next.key == allProjects.length) {
    next.id = first.id;
  }

  return (
    <>
      <PageBannerTwo
        subTitle={projectData.intro?.subtitle || ""}
        title={projectData.intro?.title || projectData.title}
        bgImage={projectData.intro?.bgImage || projectData.image}
      />

      {/* description */}
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html: projectData.description?.heading?.subtitle || "",
                  }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html:
                      projectData.description?.heading?.title ||
                      projectData.title,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 mil-mt-suptitle-offset">
              <div
                className="mil-text mil-up mil-mb-30"
                dangerouslySetInnerHTML={{
                  __html: projectData.description?.content || "",
                }}
              />

              {projectData.description?.avatar && (
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mil-item-frame mil-up mil-mb-30">
                      <div className="mil-about-counter mil-center">
                        <div className="mil-avatar mil-mb-30">
                          <img
                            src={projectData.description.avatar.image}
                            alt={projectData.description.avatar.name}
                          />
                        </div>
                        <h5 className="mil-upper mil-mb-10">
                          {projectData.description.avatar.name}
                        </h5>
                        <p className="mil-text-sm mil-dark-soft">
                          {projectData.description.avatar.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div
                      className="mil-text mil-up mil-mb-30"
                      dangerouslySetInnerHTML={{
                        __html: projectData.description.avatar.text || "",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* description end */}

      <div className="container">
        <div className="mil-divider-lg" />
      </div>

      {/* info */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-mb-90">
            <h2 className="mil-upper mil-up">
              {projectData.details?.title || "Project Details"}
            </h2>
          </div>
          <div className="row mil-mb-30">
            {projectData.details?.items?.map(
              (item: { label?: string; value?: string }, key: number) => (
                <div className="col-lg-3" key={`project-details-item-${key}`}>
                  <h6 className="mil-upper mil-up mil-mb-30">{item.label}</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-60">
                    <li>{item.value}</li>
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* info end */}

      {projectData.gallery && projectData.gallery.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <FullImageSlider
            items={projectData.gallery
              .filter((item) => item.image)
              .map((item) => ({
                image: item.image as string,
                alt: item.alt ?? "project image",
              }))}
          />
        </Suspense>
      )}

      <BenefitsSection />

      <div className="container">
        <div className="mil-divider-lg" />
      </div>

      {/* resume */}
      {projectData.resume && (
        <section>
          <div className="container mil-p-120-90">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html: projectData.resume.title || "",
                  }}
                />
                <div
                  className="mil-text mil-up mil-mb-60"
                  dangerouslySetInnerHTML={{
                    __html: projectData.resume.content || "",
                  }}
                />

                {projectData.resume.signature && (
                  <div className="row align-items-center mil-up">
                    <div className="col-lg-4 mil-mb-30">
                      <h5 className="mil-upper mil-mb-10">
                        {projectData.resume.signature.name}
                      </h5>
                      <p>{projectData.resume.signature.role}</p>
                    </div>
                    <div className="col-lg-6 mil-mb-30">
                      <h2 className="mil-font-2 mil-thin">
                        {projectData.resume.signature.text}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-5 mil-mt-suptitle-offset">
                {projectData.resume.quote && (
                  <div
                    className="mil-review-frame mil-mb-30"
                    data-swiper-parallax-x="-200"
                    data-swiper-parallax-opacity="0"
                  >
                    <div className="mil-reviev-head mil-up">
                      <div className="mil-left">
                        <div className="mil-quote">
                          <img src="/img/icons/12.svg" alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="mil-up">
                      <div className="mil-review-text">
                        <h3
                          className="mil-font-2 mil-mb-30"
                          dangerouslySetInnerHTML={{
                            __html: projectData.resume.quote.text || "",
                          }}
                        />
                        <p className="mil-text-sm">
                          {projectData.resume.quote.author}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* resume end */}

      <div className="container">
        <div className="mil-divider-lg" />
      </div>

      {/* next/prev project */}
      <section>
        <div className="container mil-p-120-60">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              {prev.id != 0 && (
                <div className="mil-prev-project mil-mb-60">
                  <h4 className="mil-upper mil-up mil-mb-30">
                    Previous project
                  </h4>
                  <Link
                    href={`/projects/${prev.id}`}
                    className="mil-link mil-left-link mil-upper mil-up"
                  >
                    Previous work{" "}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <div className="col-md-6 col-lg-6">
              {next.id != 0 && (
                <div className="mil-next-project mil-mb-60">
                  <h4 className="mil-upper mil-up mil-mb-30">Next project</h4>
                  <Link
                    href={`/projects/${next.id}`}
                    className="mil-link mil-upper mil-up"
                  >
                    Next work{" "}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* next/prev project end */}
    </>
  );
}
export default ProjectDetail;
