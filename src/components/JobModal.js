import React from "react";
import "../styles/JobModal.css";
import {
  Drawer,
  Typography,
  Divider,
  Box,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const JobModal = ({ job, open, onClose }) => {
  if (!job) return null;

  return (
    <Slide
      direction="up"
      in={open}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 500 }} // Adjust the duration for smooth enter and exit
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
              maxHeight: "85vh", // Maximum height when scrolled
              height: "50vh", // Initial height
              overflowY: "auto",
            },
          }}
        >
          <Box>
            {/* Header Section */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {job.company}
              </Typography>
              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* MUI Divider */}
            <Divider sx={{ marginY: "1rem" }} />

            {/* Job Outcomes */}
            <Box>
              {job.outcomes.map((outcome, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ marginBottom: "1rem" }}
                >
                  {outcome}
                </Typography>
              ))}
            </Box>
          </Box>
        </Drawer>
      </div>
    </Slide>
  );
};

export default JobModal;