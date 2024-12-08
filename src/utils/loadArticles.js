// src/utils/loadArticles.js
import matter from 'gray-matter';

export const loadArticles = async () => {
  try {
    // Fetch the list of posts from posts.json
    const response = await fetch('/posts/posts.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const postsList = await response.json();

    // Fetch and parse each Markdown file
    const articles = await Promise.all(
      postsList.map(async (post) => {
        const postResponse = await fetch(`/posts/${post.filename}`);
        if (!postResponse.ok) {
          throw new Error(`Failed to fetch ${post.filename}: ${postResponse.status}`);
        }
        const postText = await postResponse.text();
        const { data, content } = matter(postText);
        return { data, content };
      })
    );

    return articles;
  } catch (error) {
    console.error("Error loading articles:", error);
    return [];
  }
};