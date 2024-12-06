import React, { useRef, useEffect, useState } from "react";
import JobTile from "./JobTile";

const JobList = ({ jobs, onJobClick }) => {
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(null);

  useEffect(() => {
    // Wait for all tiles to render
    if (containerRef.current) {
      const tileElements = containerRef.current.querySelectorAll(".job-tile");
      let largestHeight = 0;

      tileElements.forEach((tile) => {
        const height = tile.getBoundingClientRect().height;
        if (height > largestHeight) {
          largestHeight = height;
        }
      });

      setMaxHeight(largestHeight);
    }
  }, [jobs]);

  return (
    <div className="job-list" ref={containerRef}>
      {jobs.map((job, index) => (
        <JobTile key={index} job={job} index={index} onClick={onJobClick} tileHeight={maxHeight ? `${maxHeight}px` : 'auto'} />
      ))}
    </div>
  );
};

export default JobList;
