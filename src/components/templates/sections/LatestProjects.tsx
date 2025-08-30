import Data from "@/data/sections/latest-projects.json";
import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/utils/projects";

export interface LatestProjectsSectionProps {
  projects: ProjectData[];
}

const LatestProjectsSection = ({ projects }: LatestProjectsSectionProps) => {
  // Filter projects that have all required fields
  const validProjects = projects.filter(
    (
      project
    ): project is ProjectData & {
      image: string;
      title: string;
      short: string;
    } => {
      return !!(project.image && project.title && project.short);
    }
  );

  const projectRows0: ProjectData[][] = [];

  for (let i = 0; i < Data.numOfItems; i += 3) {
    projectRows0.push(validProjects.slice(i, 3 + i));
  }

  const projectRows: ProjectData[][] = [];

  projectRows0.forEach((row) => {
    const row1_items: ProjectData[] = [];
    const row2_items: ProjectData[] = [];

    row.forEach((item, row2_key) => {
      if (row2_key < 2) {
        row1_items.push(item);
      } else {
        row2_items.push(item);
      }
    });

    projectRows.push(row1_items);
    projectRows.push(row2_items);
  });

  return (
    <>
      {/* portfolio */}
      <section>
        <div className="container-fluid">
          <div className="row">
            {projectRows.map((row, row_key) => (
              <div
                className="col-md-6 col-lg-3"
                key={`projects-row-${row_key}`}
              >
                {row.map((item, key) => (
                  <Link
                    href={`/projects/${item.id}`}
                    key={`projects-item-${key}`}
                    className={
                      row.length === 2
                        ? "mil-portfolio-item mil-square-item mil-up mil-mb-30"
                        : "mil-portfolio-item mil-long-item mil-up mil-mb-30"
                    }
                  >
                    <Image
                      src={item.image || ""}
                      alt={item.title || ""}
                      width={400}
                      height={300}
                    />
                    <div className="mil-project-descr">
                      <h4 className="mil-upper mil-mb-20">
                        {item.title || ""}
                      </h4>
                      <div className="mil-divider-sm mil-mb-20"></div>
                      <p>{item.short || ""}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog end */}
    </>
  );
};

export default LatestProjectsSection;
