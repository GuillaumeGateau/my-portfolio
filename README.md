Portfolio Project - README

Project Overview

This portfolio project is a dynamic personal website showcasing articles, essays, professional work, and major career projects. The site is designed to be:
	•	Clean – Minimal, modern layout.
	•	Responsive – Mobile-first CSS ensures readability on all devices.
	•	Highly Maintainable – Uses Netlify CMS for content updates and JSON automation to dynamically generate data.

Major tech highlights:
	•	React for interactivity
	•	@mui/material (MUI) for styling consistency and theming
	•	Netlify for deployment, form submissions, and CMS integration
	•	Markdown for content files (articles, projects)
	•	Automation scripts to generate .json data from Markdown files

The site consists of several major sections:
	1.	Hero Section – A sleek introduction to capture attention.
	2.	Articles Section – Displays essays and projects in a modern carousel.
	3.	Resume Section – A dynamic job history grid with interactive drawers for detailed project content.
	4.	CMS Integration – Easy updates to content without touching the codebase.

Goals
	1.	Content Management
	•	Articles: Markdown files stored in public/posts, managed via Netlify CMS.
	•	Jobs: Markdown files in public/jobs with associated projects nested dynamically.
	•	Projects: Markdown files in public/projects, each linked to a job by jobId.
	2.	Dynamic Data Management
	•	Automated JSON scripts to fetch articles, projects, and jobs into the frontend.
	•	Content displayed using structured data rather than static components.
	3.	Responsive and Engaging UI
	•	Fully responsive, mobile-first CSS layout.
	•	Grid-based design for both articles and job history.
	•	Interactive drawers and modals for detailed content.

Major Features

1. Articles Section
	•	Articles are Markdown files in public/posts.
	•	Netlify CMS integration allows non-technical users to create/update/delete content.
	•	A carousel component displays articles dynamically:
	•	If an image is provided, it appears in a clean card layout.
	•	If no image is available, the article’s title is centered.
	•	Clicking a card opens a drawer modal for detailed reading (with React Markdown).

2. Resume and Job History Section
	•	Resume Layout: Jobs are shown in a responsive grid (mobile-first).
	•	Job Modal:
	•	Clicking a job tile opens a drawer with detailed job info and related projects.
	•	Projects are fetched using a utility (e.g., mapProjectsToJobById), linking them to a job via jobId.
	•	Project Management: Projects are also Markdown in public/projects, each with metadata (title, images, description).

3. JSON Automation

Three key scripts in the scripts/ folder keep data in sync:
	1.	generatePostsJson.js – Converts article Markdown to posts.json.
	2.	generateProjectsJson.js – Converts project Markdown to projects.json.
	3.	generateJobsMarkdown.js – Ensures job Markdown files are properly structured.

The generated JSON is consumed by React components, letting you add new articles or jobs by simply adding Markdown files, rather than editing React code.

4. CMS Integration
	•	Netlify CMS config in public/admin/config.yml.
	•	Accessed via /admin.
	•	Articles, Jobs, and Projects all have forms for easy editing.
	•	Build and JSON generation automatically triggered on Netlify after each CMS update.

Tech Stack

Core Technologies
	•	React: Frontend framework for dynamic components.
	•	Netlify CMS: Headless CMS for easy content updates.
	•	CSS: Mobile-first, responsive design.
	•	Markdown: Content storage for articles, projects, jobs.
	•	Netlify: Hosting, build automation, and form handling.

Key Packages
	•	react-markdown: Renders Markdown content into HTML.
	•	@mui/material: Material UI for modern components and theming.
	•	gray-matter: Parses Markdown frontmatter.
	•	buffer: Ensures Node-based features work in the browser.

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
├── 📂 public/                    # Public assets, Netlify CMS, etc.
│   ├── 📂 admin/                 # Netlify CMS config
│   │   └── config.yml            
│   ├── 📂 assets/                # General assets (icons, logos)
│   ├── 📂 images/                # Static images
│   ├── 📂 jobs/                  # Markdown for job entries
│   ├── 📂 posts/                 # Markdown for articles
│   ├── 📂 projects/              # Markdown for projects
│   ├── index.html                # Root HTML
│   ├── robots.txt                # SEO config
│   └── table4Logo.png            # Custom logo
├── 📂 scripts/                   
│   ├── generateJobsMarkdown.js   # Generates JSON for jobs
│   ├── generatePostsJson.js      # Generates JSON for articles
│   └── generateProjectsJson.js   # Generates JSON for projects
├── 📂 src/                       
│   ├── 📂 assets/                # App-specific static assets
│   ├── 📂 components/            # React components
│   │   ├── ArticleCard.js        # Renders individual article cards
│   │   ├── ArticleDrawer.js      # Drawer for detailed article view
│   │   ├── Articles.js           # Articles section logic
│   │   ├── Header.js             # Hero header + navigation
│   │   ├── JobList.js            # Grid layout for job tiles
│   │   ├── JobModal.js           # Drawer with job details
│   │   ├── JobTile.js            # Individual job tile with animations
│   │   └── Resume.js             # Resume section logic
│   ├── 📂 pages/                 
│   │   ├── Home.js               # Main landing page
│   │   └── Admin.js              # Netlify CMS admin page
│   ├── 📂 styles/                
│   │   ├── Articles.css          # Articles section styles
│   │   ├── Header.css            # Hero section styles
│   │   ├── JobList.css           # Job list styles
│   │   ├── JobModal.css          # Job modal styles
│   │   ├── JobTile.css           # Individual job tile styles
│   │   ├── Resume.css            # Resume layout styles
│   │   └── global.css            # Global CSS resets + utilities
│   ├── App.js                    # Main React app logic
│   └── index.js                  # React root
├── package.json                  # Project dependencies
└── README.md                     # Documentation

How to Run the Project
	1.	Install Dependencies

npm install


	2.	Run Development Server

npm start


	3.	Generate JSON Files (if needed)

npm run generate-posts-json
npm run generate-projects
npm run generate-jobs


	4.	Build for Production

npm run build

How to Add Content
	1.	Add Articles
	•	Go to /admin > Posts in Netlify CMS.
	•	Or manually add Markdown files in public/posts.
	2.	Add Jobs
	•	Go to /admin > Jobs.
	•	Add a job with an ID, description, etc.
	3.	Add Projects
	•	Go to /admin > Projects.
	•	Link each project to a job using its jobId field.

Recent Changes & Enhancements

1. Contact Section Updates
	•	MUI “Outlined” inputs with a single notched outline (no double border).
	•	Optional “Message” field: no validation required for message.
	•	Per-Field Validation on Blur: Users see errors immediately for Name/Company/Email.
	•	Netlify Form Submission:
	•	Submissions are emailed directly to keck.william@gmail.com.
	•	A hidden form-name and data-netlify="true" attribute let Netlify process forms.

2. Calendly Popup Integration
	•	Dynamically loaded widget.js and widget.css from Calendly so it won’t double-load.
	•	Popup (initPopupWidget) for scheduling calls.
	•	Z-index fix and ad-block awareness so it doesn’t freeze or stay behind other elements.

3. Button & Theme Adjustments
	•	“Let’s Chat!” button color matches the section text (#34495E).
	•	Hover/Focus states removed conflicts that caused text to disappear.
	•	Removed extra borders and matched MUI’s border radius for consistency site-wide.

4. Global CSS & Theming
	•	Unified global variables under :root, including --color-primary-text, etc.
	•	MUI theme replaced hard-coded hex values with CSS variables.
	•	Simplified focus outlines so the label doesn’t look “cut” by multiple borders.

5. Optional “Message”
	•	Validation logic updated to skip message as a required field, allowing blank submissions.

6. Smooth GitHub Markdown
	•	The above format ensures headings, subheadings, code blocks, and bullet points render clearly in GitHub.

Responsive Design
	•	Mobile-first: The core CSS and MUI breakpoints optimize for small screens first.
	•	Layout gracefully expands for tablets and desktops, using flexible grids.
	•	Modals and drawers adapt to narrower screens.

Netlify Setup
	•	Hosting: Deployed on Netlify for easy CMS + form handling.
	•	Form Notifications: Once you enable email notifications in Netlify’s “Forms” tab, each submission is emailed to you automatically.
	•	Build Hooks: Netlify automatically regenerates JSON when you add or update Markdown files in CMS.

Conclusion

This expanded README provides:
	1.	Full Project Clarity – High-level overview and detailed sub-sections.
	2.	Detailed Directory Breakdown – Clear file/folder structure.
	3.	Recent Changes – Summaries of all styling fixes, form validation enhancements, Calendly pop-up logic, and Netlify form integration.
	4.	Step-by-Step Instructions – Clear commands for running and building.
	5.	Responsive Design Notes – Ensuring a consistent UI across devices.

With these updates, you can quickly understand the codebase, add new content, and see exactly how the site’s layout and form submissions work—even if you’re new to the project. Happy coding!