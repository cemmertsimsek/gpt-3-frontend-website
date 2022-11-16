import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgURL={blog01}
            date="Nov 16, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc nibh, feugiat non turpis vel, laoreet iaculis nisi. Aliquam non libero ut eros rhoncus iaculis eu at mi. Aenean vitae dapibus est. Vivamus ex risus, commodo rutrum facilisis eu, maximus at est. Phasellus quis pulvinar sapien. Suspendisse potenti. Sed lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit augue, mattis quis nunc sit amet, commodo condimentum urna. Aliquam."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgURL={blog02}
            date="Nov 16, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit augue, mattis quis nunc sit amet, commodo condimentum urna. Aliquam."
          />
          <Article
            imgURL={blog03}
            date="Nov 16, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit augue, mattis quis nunc sit amet, commodo condimentum urna. Aliquam."
          />
          <Article
            imgURL={blog04}
            date="Nov 16, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit augue, mattis quis nunc sit amet, commodo condimentum urna. Aliquam."
          />
          <Article
            imgURL={blog05}
            date="Nov 16, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit augue, mattis quis nunc sit amet, commodo condimentum urna. Aliquam."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
