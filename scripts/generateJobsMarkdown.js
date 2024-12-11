const fs = require('fs');
const path = require('path');

// Path to resumeData.json
const resumeData = require('../src/assets/resumeData.json'); // Adjust path if needed
const outputDirectory = path.join(__dirname, '../public/jobs');

// Function to generate job Markdown files
const generateJobMarkdown = () => {
  // Ensure the output directory exists
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  resumeData.forEach(job => {
    const filePath = path.join(outputDirectory, `job-${job.id}.md`);

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      console.log(`Job ${job.id} already exists. Skipping...`);
      return;
    }

    // Create the Markdown content
    const jobContent = `---
id: "${job.id}"
company: "${job.company}"
---`;

    // Write the file
    fs.writeFileSync(filePath, jobContent);
    console.log(`Generated ${filePath}`);
  });
};

generateJobMarkdown();