import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

const HomePage = () => {
  // Select the first two articles for the homepage display
  const featuredArticles = articles.slice(0, 2);

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to My Blog</h1>
      </header>
      <section className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="article-section">
          <ArticlesList articles={featuredArticles} />
        </div>
        <Link to="/articles">
          <button className="view-more-button">View All Articles &gt; </button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
