import React, { useState, useEffect } from "react";
import {
  Drawer,
  Typography,
  Divider,
  Box,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mapProjectsToJobById } from "../utils/mapProjectsToJobById";
import "../styles/JobModal.css"; // Importing the CSS file for styles

const JobModal = ({ jobId, open, onClose }) => {
  const [job, setJob] = useState(null); // State to hold the job with its projects
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the selected project for details

  useEffect(() => {
    const fetchJobData = async () => {
      if (open && jobId) {
        try {
          const jobData = await mapProjectsToJobById(jobId);
          setJob(jobData);
          setSelectedProject(null); // Reset selected project when the modal opens
        } catch (error) {
          console.error("Failed to load job data:", error);
        }
      }
    };

    fetchJobData();
  }, [open, jobId]);

  if (!open || !job) return null; // Return nothing if modal is closed or job is not loaded

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <Slide
      direction="up"
      in={open}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 500 }}
    >
      <div>
        <Drawer
          anchor="bottom"
          open={open}
          onClose={onClose}
          PaperProps={{
            style: {
              borderRadius: "16px 16px 0 0",
              padding: "1rem",
              maxHeight: "85vh",
              height: "50vh",
              overflowY: "auto",
            },
          }}
        >
          <Box>
            {/* Header Section */}
            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
              <Typography variant="h6" className="modal-title">
                {job.company}
              </Typography>
              <IconButton
                onClick={onClose}
                className="close-button"
                sx={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider className="modal-separator" />

            {/* Show either project tiles or project details */}
            {!selectedProject ? (
              <Box className="tiles-container">
                {job.projects && job.projects.length > 0 ? (
                  job.projects.map((project, index) => (
                    <Box
                      key={index}
                      className="tile"
                      onClick={() => handleProjectClick(project)}
                    >
                      <Typography className="tile-title">
                        {project.title}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography>No projects available for this job.</Typography>
                )}
              </Box>
            ) : (
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "1rem" }}
                >
                  {selectedProject.title}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                  {selectedProject.description}
                </Typography>
                <Typography variant="body2">{selectedProject.content}</Typography>
                <Box mt={2}>
                  <Typography
                    variant="button"
                    onClick={handleBackToProjects}
                    sx={{
                      cursor: "pointer",
                      color: "blue",
                      textDecoration: "underline",
                    }}
                  >
                    Back to Projects
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Drawer>
      </div>
    </Slide>
  );
};

export default JobModal;