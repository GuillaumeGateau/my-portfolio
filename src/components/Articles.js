import React, { useState, useEffect } from 'react';
import ArticleDrawer from './ArticleDrawer';
import ArticleCard from './ArticleCard'; // Import the ArticleCard component
import '../styles/Articles.css';
import { loadArticles } from '../utils/loadArticles';

const Articles = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await loadArticles();
      setArticlesData(articles);
    };

    fetchArticles();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedArticle(null);
  };

  return (
    <section id="articles" className="articles-section">
      <h2 className="articles-title">Essays and Adventures</h2>
      <div 
        className="articles-carousel-container"
        style={{
            justifyContent: articlesData.length === 1 ? "center" : "flex-start",
          }}
      >
        {articlesData.length > 0 ? (
          articlesData.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              onClick={() => handleArticleClick(article)}
            />
          ))
        ) : (
          <p>No articles available. Please add some via the CMS.</p>
        )}
      </div>
      <ArticleDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        article={selectedArticle}
      />
    </section>
  );
};

export default Articles;