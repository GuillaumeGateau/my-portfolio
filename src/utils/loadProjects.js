// src/utils/loadProjects.js
import matter from "gray-matter";

export const loadProjects = async () => {
  try {
    // Fetch the list of projects from projects.json
    const response = await fetch(`${process.env.PUBLIC_URL}/projects/projects.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const projectsList = await response.json();

    console.log("Loaded Projects List from JSON:", projectsList); // Debugging the list of projects

    // Fetch and parse each Markdown file
    const projects = await Promise.all(
      projectsList.map(async (project) => {
        try {
          const projectResponse = await fetch(
            `${process.env.PUBLIC_URL}/projects/${project.filename}`
          );

          if (!projectResponse.ok) {
            throw new Error(
              `Failed to fetch Markdown file ${project.filename}: ${projectResponse.status}`
            );
          }

          const projectText = await projectResponse.text();
          const { data, content } = matter(projectText);

          console.log("Parsed Project Data:", data); // Debugging parsed frontmatter data

          return { ...data, content };
        } catch (error) {
          console.error("Error loading project Markdown file:", error);
          return null; // Return null for failed projects
        }
      })
    );

    // Filter out any null entries (failed projects)
    const validProjects = projects.filter((project) => project !== null);

    console.log("Final Loaded Projects:", validProjects); // Debugging final list of valid projects
    return validProjects;
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
};