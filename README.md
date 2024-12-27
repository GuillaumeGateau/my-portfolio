Here is the expanded and highly detailed README with all the requested information. I have included deeper explanations, an enhanced project overview, directory breakdown, and expanded sections to ensure full clarity.

Portfolio Project - README

Project Overview

This portfolio project serves as a dynamic personal website showcasing articles, essays, professional work, and major career projects. Designed to be clean, responsive, and highly maintainable, the site uses Netlify CMS for content management, React for interactivity, and JSON automation scripts to dynamically pull and display data without manual configuration.

The site consists of several major sections:
	1.	Hero Section – A sleek introduction to capture attention.
	2.	Articles Section – Displays essays and projects in a modern carousel.
	3.	Resume Section – A dynamic job history grid with interactive drawers for detailed project content.
	4.	CMS Integration – Easy updates to content without touching the codebase.

Goals

1. Content Management
	•	Articles: Markdown files stored in public/posts and managed via Netlify CMS.
	•	Jobs: Job entries stored in public/jobs with associated projects nested dynamically.
	•	Projects: Project Markdown files in public/projects are linked to jobs via jobId.

2. Dynamic Data Management
	•	Automated JSON generation scripts to dynamically fetch articles, projects, and jobs into the frontend.
	•	Content is displayed using structured data rather than static components.

3. Responsive and Engaging UI
	•	Fully responsive design (mobile-first CSS).
	•	Grid-based layout with interactive components for mobile, tablet, and desktop users.

Major Features

1. Articles Section
	•	Articles are stored as Markdown files (public/posts) and include metadata like title, date, and image.
	•	Articles are managed using Netlify CMS, enabling non-technical users to add, update, or delete content seamlessly.
	•	A carousel component displays articles dynamically:
	•	If an image is provided, it is shown in a clean card layout.
	•	If no image is available, the article title is centered in the card.
	•	Clicking a card opens a drawer modal to view detailed article content, including text rendered with React Markdown.

2. Resume and Job History Section
	•	Resume Layout:
	•	Jobs are displayed in a grid layout with a mobile-first approach.
	•	Jobs are dynamically loaded from resumeData.json for scalability.
	•	Interactive Job Modal:
	•	Clicking a job tile opens a drawer that displays detailed job information and associated projects.
	•	Projects are fetched dynamically using the mapProjectsToJobById utility.
	•	Project Management:
	•	Projects are stored as Markdown files (public/projects) and linked to jobs using a jobId.
	•	Content includes titles, images, and detailed descriptions.

3. JSON Automation
	•	Three key scripts ensure content is dynamically available:
	•	generatePostsJson.js: Converts article Markdown files to posts.json.
	•	generateProjectsJson.js: Maps project Markdown files to projects.json.
	•	generateJobsMarkdown.js: Ensures job Markdown files are properly structured.
	•	JSON files are consumed by React components for rendering.

4. CMS Integration
	•	Netlify CMS provides an easy interface for managing content:
	•	Accessible via /admin.
	•	Supports articles, jobs, and projects with customizable forms.
	•	CMS updates automatically trigger JSON generation and Netlify builds.

Tech Stack

Core Technologies
	•	React: Frontend framework for dynamic components.
	•	Netlify CMS: Headless CMS for content management.
	•	CSS: Mobile-first responsive design.
	•	Markdown: Content storage for articles and projects.
	•	Netlify: Hosting and build automation.

Key Packages
	•	react-markdown: Renders Markdown content into clean HTML.
	•	@mui/material: Material-UI for consistent and modern components.
	•	gray-matter: Parses Markdown files to extract metadata (frontmatter).
	•	buffer: Ensures compatibility with Node-based features in the browser.

Updated Color Palette

Element	Color	Hex
Hero Section	Deep Charcoal	#1C1F24
About Section	Light Sky Blue	#EAF2F8
Accent	Medium Blue	#2980B9
Text	Slate Gray	#34495E
Highlights	Pale Blue	#AED6F1

Directory Structure

📦 william-portfolio/
├── 📂 build/                     # Production build files
├── 📂 public/                    # Public assets and CMS content
│   ├── 📂 admin/                 # Netlify CMS configuration
│   │   └── config.yml            # CMS settings
│   ├── 📂 assets/                # General assets (e.g., icons, logos)
│   ├── 📂 images/                # Static images
│   ├── 📂 jobs/                  # Markdown files for job entries
│   ├── 📂 posts/                 # Markdown files for articles
│   ├── 📂 projects/              # Markdown files for projects
│   ├── index.html                # Root HTML file
│   ├── robots.txt                # SEO configuration
│   └── table4Logo.png            # Custom logo
├── 📂 scripts/                   # Automation scripts for content
│   ├── generateJobsMarkdown.js   # Generates JSON for jobs
│   ├── generatePostsJson.js      # Generates JSON for articles
│   └── generateProjectsJson.js   # Generates JSON for projects
├── 📂 src/                       # Application source code
│   ├── 📂 assets/                # App-specific static assets
│   ├── 📂 components/            # React components
│   │   ├── ArticleCard.js        # Renders individual article cards
│   │   ├── ArticleDrawer.js      # Drawer for detailed article view
│   │   ├── Articles.js           # Articles section logic
│   │   ├── Header.js             # Hero header with navigation
│   │   ├── JobList.js            # Grid layout for job tiles
│   │   ├── JobModal.js           # Drawer for job details
│   │   ├── JobTile.js            # Individual job tile with animations
│   │   └── Resume.js             # Resume section logic
│   ├── 📂 pages/                 # Page components
│   │   ├── Home.js               # Main landing page
│   │   └── Admin.js              # Netlify CMS admin page
│   ├── 📂 styles/                # CSS stylesheets
│   │   ├── Articles.css          # Articles section styles
│   │   ├── Header.css            # Hero section styles
│   │   ├── JobList.css           # Job list styles
│   │   ├── JobModal.css          # Styles for job modals
│   │   ├── JobTile.css           # Individual job tile styles
│   │   ├── Resume.css            # Styles for resume layout
│   │   └── global.css            # Global CSS resets and utilities
│   ├── App.js                    # Main React app logic
│   └── index.js                  # React root file
├── package.json                  # Project dependencies
└── README.md                     # Documentation

How to Run the Project

1. Install Dependencies

npm install

2. Run Development Server

npm start

3. Generate JSON Files (if needed)

npm run generate-posts-json
npm run generate-projects
npm run generate-jobs

4. Build for Production

npm run build

How to Add Content
	1.	Add Articles:
	•	Go to /admin > Posts.
	•	Create or update Markdown files in public/posts.
	2.	Add Jobs:
	•	Go to /admin > Jobs.
	•	Add a job with an associated ID and description.
	3.	Add Projects:
	•	Go to /admin > Projects.
	•	Link a project to a job using its jobId field.

Responsive Design
	•	Mobile-first approach: Core CSS is optimized for small screens first.
	•	Breakpoints adjust layouts for tablets and desktops.
	•	Grid Layout ensures cards and modals resize gracefully.

This expanded README now provides:
	•	Full project clarity
	•	Detailed directory breakdown
	•	Step-by-step instructions
	•	Updated color palette and responsive design notes.

