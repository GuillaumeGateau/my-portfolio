// src/components/Articles.js
import React, { useState, useEffect } from 'react';
import ArticleDrawer from './ArticleDrawer';
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
      <div className="articles-carousel-container">
        {articlesData.length > 0 ? (
          articlesData.map((article, index) => {
            if (!article.data) {
              console.warn(`Article at index ${index} is missing data.`);
              return null; // Skip rendering this article
            }

            return (
              <div
                key={index}
                className="article-card"
                onClick={() => handleArticleClick(article)}
                style={{
                  border: '1px solid #ccc',
                  padding: '16px',
                  margin: '16px',
                  cursor: 'pointer',
                }}
              >
                <h3>{article.data.title}</h3>
                <p>{article.data.description}</p>
                {article.data.image && (
                  <img
                    src={article.data.image}
                    alt={article.data.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
              </div>
            );
          })
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