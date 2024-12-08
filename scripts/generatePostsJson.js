// scripts/generatePostsJson.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, '../public/posts');
const outputFile = path.join(__dirname, '../public/posts/posts.json');

const generatePostsJson = () => {
  // Read all files in the posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Filter out non-markdown files and parse each markdown file
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title || 'No Title',
        date: data.date || 'No Date',
        image: data.image || '',
        description: data.description || 'No Description',
        filename: fileName,
      };
    });

  // Write the posts array to posts.json
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Generated ${outputFile}`);
};

generatePostsJson();