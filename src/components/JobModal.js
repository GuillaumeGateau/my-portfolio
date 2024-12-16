import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Drawer, Typography, Divider, Box, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mapProjectsToJobById } from "../utils/mapProjectsToJobById";
import "../styles/JobModal.css";
import "../styles/MarkdownStyles.css"; // Import Markdown styles

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
          height: isDesktop ? "100%" : "85vh",
          borderRadius: isDesktop ? "16px 0 0 16px" : "16px 16px 0 0",
          overflowY: "auto",
        },
      }}
    >
      <Box className="modal-header">
        <Typography
          variant="h6"
          align="center"
          sx={{
            width: "100%",
            padding: "0 48px",
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
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      {!selectedProject ? (
        <Box className="tiles-container">
          {job.projects && job.projects.length > 0 ? (
            job.projects.map((project, index) => (
              <Box
                key={index}
                className="tile"
                onClick={() => handleProjectClick(project)}
              >
                <Typography className="tile-title">{project.title}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No projects available for this job.</Typography>
          )}
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