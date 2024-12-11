// src/utils/mapProjectsToJobById.js
import resumeData from "../assets/resumeData.json";
import { loadProjects } from "./loadProjects";

export const mapProjectsToJobById = async (jobId) => {
  try {
    // Load all projects
    const projects = await loadProjects();

    console.log("Loaded Projects:", projects); // Debug: List all loaded projects

    // Find the specific job by its ID
    const job = resumeData.find((job) => String(job.id) === String(jobId));

    console.log("Job ID Passed:", jobId); // Debug: Check the passed jobId
    console.log("Found Job:", job); // Debug: Verify the job data

    if (!job) {
      console.error(`Job with ID ${jobId} not found in resumeData.`);
      return null; // Return null if the job doesn't exist
    }

    // Filter projects associated with the job
    const associatedProjects = projects.filter(
      (project) => String(project.jobId) === String(jobId)
    );

    console.log("Associated Projects for Job:", associatedProjects); // Debug: Check associated projects

    // Return the job with its associated projects
    return { ...job, projects: associatedProjects };
  } catch (error) {
    console.error("Error mapping projects to job:", error);
    return null; // Return null to indicate failure
  }
};