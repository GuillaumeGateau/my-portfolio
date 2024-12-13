Updated README

Portfolio Project - README

Project Overview

This portfolio project serves as a personal website to showcase articles, essays, professional work, and major projects from your career. It is designed to dynamically manage content with a CMS and provide an engaging and professional experience to visitors. Key features include an articles section, a job history section with project details, and a responsive design to ensure usability across devices.

Goals
	1.	Content Management:
	•	Allow easy creation and editing of articles, job entries, and projects using Netlify CMS.
	•	Automate JSON generation for articles, projects, and jobs to integrate seamlessly into the frontend.
	2.	User Experience:
	•	Showcase job history dynamically with projects nested under each job.
	•	Enable interaction with job tiles that open detailed drawers to display associated projects.
	•	Responsive and interactive UI that works well on mobile, tablet, and desktop.
	3.	Maintainability:
	•	Use structured JSON files and Markdown for content, allowing scalable and easy updates.
	•	Automate file generation through scripts for posts, jobs, and projects.

Major Features

1. Article Management
	•	CMS-Integrated Articles:
	•	Articles are stored as Markdown files in the public/posts directory.
	•	Managed through Netlify CMS, allowing content updates without modifying code.
	•	Articles are displayed in a scrollable carousel, with modals for detailed content.
	•	JSON Automation:
	•	A generatePostsJson.js script reads Markdown files and generates posts.json, enabling dynamic loading of articles in the app.

2. Job History Section
	•	Job Tiles:
	•	Displays a grid of jobs, dynamically mapped from resumeData.json.
	•	Clicking on a tile opens a drawer modal to show details of the job, including associated projects.
	•	Project Management:
	•	Projects are stored as Markdown files in the public/projects directory.
	•	Each project includes fields for a title, description, and jobId to associate it with a specific job.
	•	The generateProjectsJson.js script converts project Markdown files into projects.json.
	•	Nested Project Details:
	•	In the drawer modal:
	•	Projects are displayed as clickable tiles with their titles.
	•	Clicking a tile opens detailed project content (e.g., descriptions and outcomes).
	•	Job Management via Netlify CMS:
	•	Jobs are managed in the public/jobs directory using Markdown files.
	•	The generateJobsMarkdown.js script ensures all job entries are correctly formatted.

3. Dynamic JSON Integration
	•	Automation Scripts:
	•	generatePostsJson.js: Creates a posts.json file from articles.
	•	generateProjectsJson.js: Creates a projects.json file from project Markdown files.
	•	generateJobsMarkdown.js: Generates and updates job Markdown files in the public/jobs directory.
	•	Mapping Projects to Jobs:
	•	A utility function mapProjectsToJobById dynamically maps projects to their respective jobs by jobId, ensuring data is always up-to-date.

Tech Stack

Frameworks and Libraries
	•	Frontend: React (via Create React App)
	•	Styling: CSS (mobile-first design) and Material-UI for components
	•	CMS: Netlify CMS for content management
	•	Hosting: Netlify
	•	State Management: React hooks (useState, useEffect)

Packages Used
	•	react-markdown: Render Markdown content for articles and projects.
	•	@mui/material: Material-UI library for styling and components.
	•	gray-matter: Parse Markdown files and metadata.
	•	buffer: Polyfill for handling Buffer in the browser.
	•	@mdx-js/loader: Optional for MDX handling (future).

Directory Structure

📂 src
├── 📂 components
│   ├── ArticleCard.js        // Displays individual article cards in the carousel.
│   ├── ArticleDrawer.js      // A drawer component for viewing detailed article content.
│   ├── JobList.js            // Displays job tiles dynamically from resumeData.json.
│   ├── JobTile.js            // Individual job tile component with hover animations.
│   ├── JobModal.js           // Drawer for viewing job details and associated projects.
│   ├── Header.js             // Site header and navigation.
│   └── Footer.js             // Site footer (optional).
├── 📂 pages
│   ├── Home.js               // Landing page that includes articles, jobs, and introduction.
│   ├── PasswordReset.js      // Page for handling user password resets via Netlify Identity.
├── 📂 styles
│   ├── global.css            // Global styling and CSS resets.
│   ├── Articles.css          // Styles specific to the articles section.
│   ├── JobModal.css          // Styles for job modal and project tiles.
│   └── Resume.css            // Styles for the resume section (job list).
├── 📂 utils
│   ├── loadArticles.js       // Loads articles from Netlify CMS and processes data.
│   ├── loadProjects.js       // Loads projects dynamically from Markdown files.
│   ├── mapProjectsToJobById.js // Maps projects to jobs by `jobId`.
│   └── generatePostsJson.js  // Script to generate posts.json for articles.
├── App.js                    // Main entry point for the app.
├── index.js                  // React root rendering and global Buffer setup.
└── config.yml                // Configuration for Netlify CMS.

How the Site Works

1. Articles Section
	•	Articles are loaded from Markdown files in the public/posts directory.
	•	Dynamically displayed in a horizontally scrollable carousel.
	•	Clicking a card opens a modal to view the detailed article content.

2. Job History Section
	•	Job Tiles:
	•	Jobs are dynamically mapped from resumeData.json.
	•	Clicking a tile opens a drawer to view job details.
	•	Projects:
	•	Projects are loaded from projects.json and displayed under their associated jobs.
	•	Clicking a project tile opens a detailed view of the project.

3. Netlify CMS Integration
	•	Accessible via /admin.
	•	Supports managing articles, jobs, and projects with simple UIs.
	•	Automatically triggers JSON generation scripts on build.

How to Add Content

1. Add an Article
	•	Go to /admin > Posts.
	•	Add a new article and save.
	•	The article will automatically appear in the carousel after deployment.

2. Add a Job
	•	Go to /admin > Jobs.
	•	Add a new job with an ID and basic details.
	•	Save the job, and it will appear in the job list.

3. Add a Project
	•	Go to /admin > Projects.
	•	Add a new project, linking it to a specific job using its jobId.
	•	Save the project, and it will appear under the associated job in the modal.

How to Run Locally
	1.	Install Dependencies:

npm install


	2.	Run the Development Server:

npm start


	3.	Generate JSON Files Manually (if necessary):

npm run generate-posts-json
npm run generate-projects
npm run generate-jobs


	4.	Build for Production:

npm run build

Responsive Design
	•	Mobile-first CSS approach ensures seamless usability across all devices.
	•	Grid-based Layout:
	•	Articles carousel and job tiles use responsive grid styles.
	•	Breakpoints adjust the layout for tablets and desktops.

