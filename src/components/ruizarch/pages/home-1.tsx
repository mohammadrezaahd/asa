import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@/data/app.json";

import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";

import HeroOneSection from "../components/HeroOne";
import AboutSection from "../components/About";
import IdeasSection from "../components/Ideas";
import ServicesSection from "../components/Services";
import AdvantagesSection from "../components/Advantages";
import LatestProjectsSection from "../components/LatestProjects";
import HowWeWorkSection from "../components/HowWeWork";
import LatestPostsSection from "../components/LatestPosts";
import CoresSection from "../components/Cores";

const PartnersSlider = dynamic(() => import("../components/Partners"), {
  ssr: false,
});

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home1() {
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
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
