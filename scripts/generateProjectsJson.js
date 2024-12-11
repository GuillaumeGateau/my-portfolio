const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const projectsDirectory = path.join(__dirname, "../public/projects");
const outputFile = path.join(projectsDirectory, "projects.json");

const generateProjectsJson = () => {
  // Ensure the projects directory exists
  if (!fs.existsSync(projectsDirectory)) {
    console.error("Projects directory does not exist:", projectsDirectory);
    return;
  }

  // Read all files in the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);

  // Filter out non-Markdown files and parse each Markdown file
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        filename: fileName,
        title: data.title || "No Title",
        jobId: data.jobId || "No Job ID",
        description: data.description || "No Description",
      };
    });

  // Write the projects array to projects.json
  fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
  console.log(`Generated ${outputFile}`);
};

generateProjectsJson();