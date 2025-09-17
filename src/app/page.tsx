import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@/data/app.json";

import { getSortedPostsData } from "@/utils/posts";
import { getSortedProjectsData } from "@/utils/projects";

import HeroOneSection from "@/components/templates/sections/HeroOne";
import AboutSection from "@/components/templates/sections/About";
import IdeasSection from "@/components/templates/sections/Ideas";
import ServicesSection from "@/components/templates/sections/Services";
import AdvantagesSection from "@/components/templates/sections/Advantages";
import LatestProjectsSection from "@/components/templates/sections/LatestProjects";
import HowWeWorkSection from "@/components/templates/sections/HowWeWork";
import LatestPostsSection from "@/components/templates/sections/LatestPosts";
import CoresSection from "@/components/templates/sections/Cores";

const PartnersSlider = dynamic(
  () => import("@/components/templates/sections/Partners"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      <HeroOneSection />
      <PartnersSlider />
      <AboutSection />
      <IdeasSection />
      <ServicesSection />
      <AdvantagesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <HowWeWorkSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CoresSection />
    </>
  );
}
export default Home;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
