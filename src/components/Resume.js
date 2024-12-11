import React, { useState } from "react";
import "../styles/Resume.css";
import JobList from "./JobList";
import JobModal from "./JobModal";
import resumeData from "../assets/resumeData.json";

const Resume = () => {
  const [selectedJobId, setSelectedJobId] = useState(null); // Track selected job ID
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open state

  const handleJobClick = (jobId) => {
    setSelectedJobId(jobId); // Save the selected job ID
    setIsModalOpen(true);    // Open the modal
  };

  const handleCloseModal = () => {
    setSelectedJobId(null);  // Clear the job ID
    setIsModalOpen(false);   // Close the modal
  };

  return (
    <div className="resume-container" id="resume">
      <div className="experience-intro">
        <h2>About My Experience</h2>
        <p>
          Over a decade of experience driving product innovation across multiple
          industries, including tech, e-commerce, and QSR.
        </p>
      </div>

      <JobList jobs={resumeData} onJobClick={handleJobClick} />

      <JobModal jobId={selectedJobId} open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Resume;