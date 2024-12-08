import React from 'react';
import '../styles/Articles.css';

const ArticleCard = ({ article, onClick }) => {
  return (
    <div className="article-card" onClick={onClick}>
      {/* Show the article image if it exists */}
      {article.image ? (
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      ) : (
        <div className="article-image-placeholder">Image Here</div>
      )}
    </div>
  );
};

export default ArticleCard;