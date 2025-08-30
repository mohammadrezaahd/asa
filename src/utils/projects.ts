import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "src/data/projects");

// Define interfaces for type safety
export interface ProjectData {
  id: string;
  category?: string;
  title?: string;
  date?: string;
  image?: string;
  short?: string;
  [key: string]: unknown;
}

interface ProjectWithContent extends ProjectData {
  contentHtml: string;
}

interface ProjectParams {
  params: {
    id: string;
  };
}

export function getSortedProjectsData(): ProjectData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData: ProjectData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as ProjectData;
  });

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getRelatedProjects(current_id: string): ProjectData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData: ProjectData[] = [];

  fileNames.forEach((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Exclude current id from result
    if (id !== current_id) {
      // Combine the data with the id
      allData.push({
        id,
        ...matterResult.data,
      } as ProjectData);
    }
  });

  // Sort posts by category
  return allData.sort((a, b) => {
    const categoryA = a.category || "";
    const categoryB = b.category || "";

    if (categoryA > categoryB) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectsIds(): ProjectParams[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(
  id: string
): Promise<ProjectWithContent | undefined> {
  const fullPath = path.join(projectsDirectory, `${id}.md`);

  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    } as ProjectWithContent;
  } else {
    return undefined;
  }
}
