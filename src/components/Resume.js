import React, { useState } from "react";
import "../styles/Resume.css";
import JobList from "./JobList";
import JobModal from "./JobModal";
import resumeData from "../assets/resumeData.json";

const Resume = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
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

      <JobModal job={selectedJob} open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Resume;