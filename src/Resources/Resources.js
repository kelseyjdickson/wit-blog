import React from "react";
import { Link } from "react-router-dom";

//assets
import "./_resources.scss";
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpeg";
import blog3 from "../images/blog3.jpeg";
import blog4 from "../images/blog4.jpeg";
import wit from '../images/Wit-1.jpeg'

const Resources = () => {
  return (
    <div className="resource-container">
      <Link to="/home">
      <img className="logo"src={wit} alt="logo"/>
      </Link>
      <h1>Resources</h1>
      <ul className="header">
        <li>WIT BLOGS</li>
        <li>Links</li>
      </ul>
      <div className="link">
        <a href="https://www.thecohortcollective.com/"target="_blank">The Cohort Collective</a>
      </div>
     <div className="link">
        <a href="https://www.blackgirlscode.com/" target="_blank">Black Girls Code</a>
      </div>
      <div className="link">
        <a href="https://www.ajl.org/"target="_blank">Algorithmic Justice League</a>
      </div>
      <div className="link">
        <a href="https://girlswhocode.com/"target="_blank">Girls Who Code</a>
      </div>
      <div className="link">
        <a href="https://www.techtalentpipeline.nyc/"target="_blank">NY Tech Talent Pipeline</a>
      </div>
      <div className="link">
        <a href="https://community.joinyearone.io/"target="_blank">Year One</a>
      </div>
    

      <a href="https://kelseyjdickson.medium.com/5-women-in-tech-to-watch-in-2021-1df735a9ecbd"target="_blank">
        <img
          className="resource-container__blog1"
          src={blog1}
          alt="wit first blog"
        />
      </a>

      <a href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-9cb2d69543c7"target="_blank">
        <img
          className="resource-container__blog1"
          src={blog2}
          alt="wit secondblog"
        />
      </a>

      <a href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-cdb437200fe1"target="_blank">
        <img
          className="resource-container__blog1"
          src={blog3}
          alt="wit third blog"
        />
      </a>

      <a href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-25fc42d7a928" target="_blank">
        <img
          className="resource-container__blog1"
          src={blog4}
          alt="wit fourth blog"
        />
      </a>
    </div>
  );
};

export default Resources;
