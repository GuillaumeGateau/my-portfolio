import React from 'react';
import ArticleCard from './ArticleCard';
import '../styles/Articles.css';

const Articles = ({ articles }) => {
  return (
    <section id="articles" className="articles-section">
      <div className="articles-carousel-container">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            onClick={() => console.log(`Article clicked: ${article.title}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;