import React from "react";
import { Link } from "react-router-dom";

//assets
import "./_resources.scss";
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.jpeg";
import blog3 from "../images/blog3.jpeg";
import blog4 from "../images/blog4.jpeg";
import wit from "../images/Wit-1.jpeg";

const Resources = () => {
  return (
    <div className="resource-container">
      <Link to="/home">
        <img className="logo" src={wit} alt="logo" />
      </Link>
      <h1>Resources</h1>
     
      <div className="div-container">
      <div className="link">
        <a
          href="https://www.thecohortcollective.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Cohort Collective
        </a>
      </div>
      <div className="link">
        <a
          href="https://www.blackgirlscode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Black Girls Code
        </a>
      </div>
      <div className="link">
        <a
          href="https://www.ajl.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Algorithmic Justice League
        </a>
      </div>
      <div className="link">
        <a
          href="https://girlswhocode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Girls Who Code
        </a>
      </div>
      <div className="link">
        <a
          href="https://www.techtalentpipeline.nyc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NY Tech Talent Pipeline
        </a>
      </div>
      <div className="link">
        <a
          href="https://community.joinyearone.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Year One
        </a>
      </div>
      <div className="link">
        <a
          href="https://www.diversifytech.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diversify Tech
        </a>
      </div>
      <div className="link">
        <a
          href="https://linktr.ee/artistswhocode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Artists Who Code
        </a>
      </div>
      <div className="link">
        <a
          href="https://mentorcruise.com/mentor/NazDelam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mentorship by Naz Delam
        </a>
      </div>
      <div className="link">
        <a
          href="https://www.femmecubator.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Femmecubator
        </a>
        </div>
        <div className="link">
        <a
        href="https://techtonica.org/full-time-program/"
        target="_blank"
        rel="noopener noreferrer"
      >Techtonica - Bootcamp for Womxn and Non-binary folx</a>
      </div>
      </div>
      <div className="blog-container">
      <a
        href="https://kelseyjdickson.medium.com/5-women-in-tech-to-watch-in-2021-1df735a9ecbd"
        target="_blank"
        rel="noopener noreferrer"
      >
        
        <img
          className="resource-container__blog1"
          src={blog1}
          alt="wit first blog"
        />
      </a>

      <a
        href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-9cb2d69543c7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="resource-container__blog1"
          src={blog2}
          alt="wit secondblog"
        />
      </a>

      <a
        href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-cdb437200fe1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="resource-container__blog1"
          src={blog3}
          alt="wit third blog"
        />
      </a>

      <a
        href="https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-25fc42d7a928"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="resource-container__blog1"
          src={blog4}
          alt="wit fourth blog"
        />
      </a>
      </div>
    </div>
  );
};

export default Resources;
