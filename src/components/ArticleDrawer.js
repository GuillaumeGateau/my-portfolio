import React, { useEffect } from "react";
import { Drawer, IconButton, Box, Typography, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";
import "../styles/MarkdownStyles.css"; // Import shared Markdown styles
import "../styles/ArticleDrawer.css"; // Import specific styles

const ArticleDrawer = ({ open, onClose, article }) => {
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <Drawer
      anchor={isDesktop ? "right" : "bottom"}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: isDesktop ? "65%" : "100vw",
          height: isDesktop ? "100%" : "85vh", // Matches JobModal behavior
          borderRadius: isDesktop ? "16px 0 0 16px" : "16px 16px 0 0",
          overflowY: "auto",
        },
      }}
    >
      {/* Header Section */}
      <Box className="modal-header">
        <Typography
          variant="h6"
          align="center"
          sx={{
            width: "100%",
            padding: "0 48px",
          }}
        >
          {article?.data.title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Content Section */}
      {article && (
        <Box className="modal-content">
          {article.data.image && (
            <img
              src={article.data.image}
              alt={article.data.title}
              className="modal-image"
            />
          )}
          <ReactMarkdown className="markdown-content">
            {article.content}
          </ReactMarkdown>
        </Box>
      )}
    </Drawer>
  );
};

export default ArticleDrawer;