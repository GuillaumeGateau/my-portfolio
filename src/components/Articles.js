import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import ArticleDrawer from './ArticleDrawer';
import '../styles/Articles.css';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = (article) => {
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
            hi
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