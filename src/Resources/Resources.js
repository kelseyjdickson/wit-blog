import React from "react";
import { Link } from "react-router-dom";

//assets
import "./_resources.scss";
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpeg";
import blog3 from "../images/blog3.jpeg";

const Resources = () => {
  return (
    <div className="resource-container">
        <h2>Part I</h2>
      <a href="https://kelseyjdickson.medium.com/5-women-in-tech-to-watch-in-2021-1df735a9ecbd">
        <img
          className="resource-container__blog1"
          src={blog1}
          alt="wit first blog"
        />
      </a>
      <h2>Part II</h2>
      <a href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-9cb2d69543c7">
        <img
          className="resource-container__blog1"
          src={blog2}
          alt="wit secondblog"
        />
      </a>
      <h2>Part III</h2>
      <a href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-cdb437200fe1">
        <img
          className="resource-container__blog1"
          src={blog3}
          alt="wit third blog"
        />
      </a>
    </div>
  );
};

export default Resources;
