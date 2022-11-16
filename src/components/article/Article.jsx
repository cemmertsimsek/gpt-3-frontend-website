import React from "react";
import "./article.css";

const Article = ({ imgURL, date, title, dummy }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgURL} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <div className="gpt3__blog-container_article-content-articles">
          <p>{dummy}</p>
        </div>
        <p className="gpt3__blog-container_article-lastchild">
          Read Full Article
        </p>
      </div>
    </div>
  );
};

export default Article;
