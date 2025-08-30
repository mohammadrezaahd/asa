"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ScrollAnimation } from "@/common/scrollAnims";

// Props type definition
type PageBannerProps = {
  pageTitle: string;
  breadTitle?: string;
  bgImage: string;
};

const PageBanner = ({ pageTitle, breadTitle, bgImage }: PageBannerProps) => {
  const asPath = usePathname();
  const searchParams = useSearchParams();

  // Remove HTML tags from pageTitle if breadTitle is not provided
  const clearBreadTitle: string =
    breadTitle !== undefined
      ? breadTitle
      : pageTitle.replace(/(<([^>]+)>)/gi, "");

  // If pageTitle is "Search: %s", replace with actual search query
  let displayPageTitle = pageTitle;
  if (pageTitle === "Search: %s") {
    const query = searchParams.get("key") ?? "";
    displayPageTitle = "Search: " + query;
  }

  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
      {/* banner */}
      <section className="mil-banner mil-banner-sm">
        <img
          src={bgImage}
          className="mil-bg-img mil-scale"
          data-value-1=".4"
          data-value-2="1.4"
          alt="image"
          style={{ objectPosition: "top" }}
        />

        <div className="mil-overlay" />

        <div className="container">
          <div className="mil-background-grid mil-top-space" />

          <div className="mil-banner-content mil-center">
            <div className="mil-mb-90">
              <h1
                className="mil-light mil-upper mil-mb-30"
                dangerouslySetInnerHTML={{ __html: displayPageTitle }}
              />
              <ul className="mil-breadcrumbs mil-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {asPath.includes("/blog/") &&
                  !asPath.includes("/blog/page/") && (
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                  )}
                {asPath.includes("/projects/") && (
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                )}
                {asPath.includes("/services/") && (
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                )}
                <li>
                  <a dangerouslySetInnerHTML={{ __html: clearBreadTitle }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
