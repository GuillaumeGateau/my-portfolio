import React, { useState } from 'react';
// import ArticleCard from './ArticleCard'; // Commented out unused import
import ArticleDrawer from './ArticleDrawer';
import '../styles/Articles.css';

// const handleOpenDrawer = (article) => {
//   setSelectedArticle(article);
//   setDrawerOpen(true);
// };

const Articles = () => {
  // const [selectedArticle, setSelectedArticle] = useState(null); // Commented out unused state
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    // setSelectedArticle(null); // Commented out since selectedArticle is unused
  };

  return (
    <section id="articles" className="articles-section">
      <h2 className="articles-title">Essays and Adventures</h2>
      <div className="articles-carousel-container">
        {/* Placeholder content */}
        hi
      </div>
      <ArticleDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        article={null} // Since selectedArticle is not used
      />
    </section>
  );
};

export default Articles;