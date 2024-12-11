Portfolio Project - README

Project Overview

This portfolio project serves as a personal website to showcase articles, essays, and professional work. It includes an articles section managed with a CMS, integrates responsive design principles, and uses modern web development practices to create a visually engaging and functional user experience.

Goals

	•	Present content dynamically: Manage articles and essays using Netlify CMS for easy editing.
	•	Responsive design: Ensure the site works seamlessly across devices with a mobile-first CSS approach.
	•	Interactive features: Provide an engaging UI with a carousel, modals, and a dynamic drawer for article content.

Tech Stack

Frameworks and Libraries

	•	Frontend: React (via Create React App)
	•	Styling: CSS (mobile-first design), Material-UI for components
	•	CMS: Netlify CMS for content management
	•	Hosting: Netlify
	•	State Management: React hooks (useState, useEffect)

Packages Used

	•	react-markdown: Render Markdown content for articles.
	•	@mui/material: Material-UI library for styling and components.
	•	netlify-cms: Netlify CMS for managing articles.
	•	react-router-dom: Routing between pages.
	•	gray-matter: Parse Markdown files and metadata.
	•	buffer: Polyfill for Buffer in the browser.

Directory Structure

📂 src
├── 📂 components
│   ├── ArticleCard.js         // Displays individual article cards in the carousel.
│   ├── ArticleDrawer.js       // A drawer component for viewing detailed article content.
│   ├── Header.js              // Site header and navigation (optional).
│   └── Footer.js              // Site footer (optional).
├── 📂 pages
│   ├── Articles.js            // Main articles section containing the carousel and drawer logic.
│   ├── Home.js                // Landing page with introductory content.
│   └── PasswordReset.js       // Page for handling user password resets via Netlify Identity.
├── 📂 styles
│   ├── global.css             // Global styling and CSS resets.
│   ├── Articles.css           // Styles specific to the articles section.
│   └── Drawer.css             // Styles specific to the ArticleDrawer component.
├── 📂 utils
│   ├── loadArticles.js        // Loads articles from Netlify CMS and processes data.
│   └── generatePostsJson.js   // Generates a JSON file for articles (used in build scripts).
├── App.js                     // Main entry point for the app.
├── index.js                   // React root rendering and global Buffer setup.
└── config.yml                 // Configuration for Netlify CMS.

Detailed File Explanations

Components

	•	ArticleCard.js:
	•	Represents each article in the carousel.
	•	Displays the article image and ensures padding for visual appeal.
	•	Responsive design ensures images scale properly.
	•	ArticleDrawer.js:
	•	Opens as a modal/drawer to display detailed article content.
	•	Includes the title, image, and body rendered from Markdown.
	•	CSS adjusts layout for mobile vs. desktop.

Pages

	•	Articles.js:
	•	Main logic for fetching and rendering articles.
	•	Includes the carousel and click handling for opening the drawer.
	•	PasswordReset.js:
	•	Handles user authentication and password recovery via Netlify Identity.

Styles

	•	global.css:
	•	Resets default browser styles.
	•	Defines shared typography, colors, and utility classes.
	•	Articles.css:
	•	Defines the layout for the articles section.
	•	Mobile-first styling ensures the carousel works well on small screens.
	•	Desktop breakpoints adjust the card size and carousel layout.
	•	Drawer.css:
	•	Controls the look and feel of the ArticleDrawer.
	•	Adjusts width, height, and padding based on screen size.

Utils

	•	loadArticles.js:
	•	Fetches articles from the CMS.
	•	Parses Markdown content and metadata using gray-matter.
	•	generatePostsJson.js:
	•	Converts Markdown articles into a JSON format for Netlify to read during builds.

CSS Design

Mobile-First Approach

	•	Default styles are optimized for mobile devices.
	•	Breakpoints are added for larger screens using @media queries.

Breakpoints

/* Global breakpoints */
@media (min-width: 768px) {
  /* Styles for tablets and above */
}

@media (min-width: 1024px) {
  /* Styles for desktops and above */
}

Key Design Choices

	•	Carousel:
	•	Horizontally scrollable with overflow-x: auto.
	•	No horizontal scroll for the page itself—only within the carousel.
	•	Drawer:
	•	Full-screen on mobile, fixed width on desktop.
	•	Prevents background scrolling when open using overflow: hidden on the body.

How the Site Works

	1.	Articles Section:
	•	Articles are loaded from Markdown files in the public/posts folder.
	•	These are displayed as cards in a horizontally scrollable carousel.
	•	Clicking a card opens the ArticleDrawer to view details.
	2.	Netlify CMS:
	•	Accessible via /admin.
	•	Allows easy creation and editing of articles using a simple UI.
	3.	Responsive Behavior:
	•	The site adjusts dynamically based on screen size, ensuring a seamless experience on all devices.

