import React from "react";
import { Link } from "react-router-dom";
import './index.css'


const ArticlesList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.name} className="article-container">
          <Link className="Link" to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content.substring(0, 150)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
