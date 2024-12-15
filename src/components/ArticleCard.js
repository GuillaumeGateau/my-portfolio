import React from "react";
import "../styles/Articles.css";

const ArticleCard = ({ article, onClick }) => {
  return (
    <div className="article-card" onClick={onClick}>
      {article.data.image ? (
        <img
          src={article.data.image}
          alt={article.data.title}
          className="article-image"
        />
      ) : (
        <div className="article-image-placeholder">{article.data.title}</div>
      )}
    </div>
  );
};

export default ArticleCard;