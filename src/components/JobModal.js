import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import {
  Drawer,
  Typography,
  Divider,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person"; // Team icon
import { mapProjectsToJobById } from "../utils/mapProjectsToJobById";
import "../styles/JobModal.css";
import "../styles/MarkdownStyles.css";

const JobModal = ({ jobId, open, onClose }) => {
  const [job, setJob] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const fetchJobData = async () => {
      if (open && jobId) {
        try {
          const jobData = await mapProjectsToJobById(jobId);
          setJob(jobData);
          setSelectedProject(null);
        } catch (error) {
          console.error("Failed to load job data:", error);
        }
      }
    };

    fetchJobData();

    if (!open) {
      setJob(null);
      setSelectedProject(null);
    }
  }, [open, jobId]);

  if (!open || !job) return null;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <Drawer
      anchor={isDesktop ? "right" : "bottom"}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: isDesktop ? "65%" : "100vw",
          height: isDesktop ? "100%" : "90vh",
          borderRadius: isDesktop ? "16px 0 0 16px" : "16px 16px 0 0",
          overflowY: "auto",
          backgroundColor: "var(--color-secondary-bg)",
          boxShadow: "none", 
          borderRight: "none", 
          border: "none",
        },
        overflowX: "hidden",
      }}
    >
      <Box className="modal-header">
        <Typography
          variant="h5"
          align="center"
          sx={{
            width: "100%",
            padding: "0 var(--spacing-large)",
            color: "var(--color-highlight-color)",
            fontWeight: "bold",
            fontSize: "1.8rem",
          }}
        >
          {selectedProject ? selectedProject.title : job.company}
        </Typography>
        <IconButton
          onClick={selectedProject ? handleBackToProjects : onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "var(--color-highlight-color)",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {!selectedProject ? (
        <Box className="modal-content">
          {/* About Section */}
          {job.about && (
            <>
              <Box className="about-section">
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "var(--color-primary-text)" }}
                >
                  About {job.company}
                </Typography>
                <Typography>{job.about}</Typography>
              </Box>
              <Divider sx={{ margin: "var(--spacing-medium) 0" }} />
            </>
          )}

          {/* Mission Section */}
          {job.mission && (
            <>
              <Box className="mission-section">
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "var(--color-primary-text)" }}
                >
                  Mission
                </Typography>
                <Typography>{job.mission}</Typography>
              </Box>
              <Divider sx={{ margin: "var(--spacing-medium) 0" }} />
            </>
          )}

          {/* Team Section */}
          {job["team-size"] > 0 && (
            <>
              <Box
                className="team-section"
                display="flex"
                alignItems="center"
                sx={{ marginBottom: "var(--spacing-medium)" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--color-primary-text)",
                    marginRight: "var(--spacing-small)",
                  }}
                >
                  Team:
                </Typography>
                {Array.from({ length: parseInt(job["team-size"], 10) }).map(
                  (_, index) => (
                    <PersonIcon
                      key={index}
                      fontSize="small"
                      sx={{ color: "var(--color-accent-color)" }}
                    />
                  )
                )}
              </Box>
              <Divider sx={{ margin: "var(--spacing-medium) 0" }} />
            </>
          )}

          {/* Projects Section */}
          <Box className="projects-section">
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "var(--color-primary-text)" }}
            >
              Projects
            </Typography>
            {job.projects && job.projects.length > 0 ? (
              <Box className="tiles-container">
                {job.projects.map((project, index) => (
                  <Box
                    key={index}
                    className="tile"
                    onClick={() => handleProjectClick(project)}
                  >
                    <Typography className="tile-title">{project.title}</Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography>No projects available for this job.</Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Box className="modal-content">
          <ReactMarkdown className="markdown-content">
            {selectedProject.content}
          </ReactMarkdown>
        </Box>
      )}
    </Drawer>
  );
};

export default JobModal;