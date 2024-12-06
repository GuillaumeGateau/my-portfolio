import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import "../styles/JobTile.css";

const JobTile = ({ job, index, onClick }) => {
  const tileRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = tileRef.current;
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const isRight = index % 2 !== 0; // Odd tiles are reversed

  return (
    <Box
      ref={tileRef}
      className={`job-tile ${isRight ? "right" : ""} ${isVisible ? "visible" : ""}`}
      onClick={() => onClick(job)}
    >
      <Card className="tile-content">
        <CardMedia
          component="img"
          image={
            job.imagePath
              ? `${process.env.PUBLIC_URL}${job.imagePath}`
              : `${process.env.PUBLIC_URL}/images/defaultLogo.jpeg`
          }
          alt={`${job.company} logo`}
          sx={{
            width: 80,
            height: 80,
            objectFit: 'contain'
          }}
          className="job-image"
        />

        <CardContent className="job-details">
          <Typography variant="h6" className="job-title">{job.title}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobTile;