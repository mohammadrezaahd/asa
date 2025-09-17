"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { ITDModelBase } from "@/interfaces/DTOs/tDModels";

// Types for props
type Category = {
  name: string;
  slug: string;
};

type ProjectsMasonryProps = {
  projects: ITDModelBase[];
  categories: Category[];
};

const ProjectsMasonry = ({ projects, categories }: ProjectsMasonryProps) => {
  // Isotope
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    isotope.current = new Isotope(".mil-portfolio-grid", {
      itemSelector: ".mil-grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer",
      },
      transitionDuration: "0.5s",
    });
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (
    key: string,
    e: MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setFilterKey(key);
    const filterLinks =
      document.querySelectorAll<HTMLAnchorElement>(".mil-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-filter");
      if (filterValue === key) {
        filter.classList.add("mil-current");
      } else {
        filter.classList.remove("mil-current");
      }
    });
  };

  return (
    <>
      {/* filter */}
      <div className="mil-filter mil-up mil-mb-90">
        <div className="mil-filter-links">
          <a
            href="#"
            data-filter="*"
            className="mil-current"
            onClick={(e) => handleFilterKeyChange("*", e)}
          >
            All
          </a>
          {categories.map((item, key) => (
            <a
              href="#"
              data-filter={`${item.slug}`}
              key={`projects-filter-item-${key}`}
              onClick={(e) => handleFilterKeyChange(item.slug, e)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {/* filter end */}

      {/* projects row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="mil-portfolio-grid mil-up">
            <div className="grid-sizer" />

            {projects.map((item, key) => {
              // بر اساس ایندکس ارتفاع متفاوت بده
              const sizeClass = key % 2 === 0 ? "mil-tall" : "mil-short";

              return (
                <div
                  className={`mil-grid-item ${item._id}`}
                  key={`projects-item-${key}`}
                >
                  <Link
                    href={`/projects/${item._id}`}
                    className={`mil-portfolio-item-2 ${sizeClass} mil-mb-30`}
                  >
                    <img src={item.thumbnail} alt={item.title} />

                    <div className="mil-project-descr">
                      <h3 className="mil-upper mil-mb-30">{item.title}</h3>
                      <div className="mil-link mil-upper">
                        Start A Project{" "}
                        <div className="mil-arrow mil-light">
                          <img src="/img/icons/1.svg" alt="arrow" />
                        </div>
                      </div>
                    </div>

                    <div className="mil-category">
                      {item.title ?? "UNTITLED"}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* projects row end */}
    </>
  );
};
export default ProjectsMasonry;
