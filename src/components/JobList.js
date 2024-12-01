import React from "react";
import JobTile from "./JobTile";

const JobList = ({ jobs, onJobClick }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobTile key={index} job={job} index={index} onClick={onJobClick} />
      ))}
    </div>
  );
};

export default JobList;