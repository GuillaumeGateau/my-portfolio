import React from "react";
import "../styles/JobTile.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import MUI Chevron

const JobTile = ({ job, index, onClick }) => {
  return (
    <div
      className={`job-tile ${index % 2 === 0 ? "" : "right"}`}
      onClick={() => onClick(job)}
    >
      <div className="tile-content">
        {index % 2 === 0 ? (
          <>
            <img
              src={job.imagePath || "/images/defaultLogo.jpeg"} // Use default if imagePath is missing
              alt={`${job.company} logo`}
              className="job-image"
            />
            <div className="job-details">
              <h3>{job.title}</h3>
            </div>
          </>
        ) : (
          <>
            <div className="job-details">
              <h3>{job.title}</h3>
            </div>
            <img
              src={job.imagePath || "/images/defaultLogo.jpeg"} // Use default if imagePath is missing
              alt={`${job.company} logo`}
              className="job-image"
            />
          </>
        )}
        <ChevronRightIcon className="chevron" /> {/* MUI Chevron */}
      </div>
    </div>
  );
};

export default JobTile;