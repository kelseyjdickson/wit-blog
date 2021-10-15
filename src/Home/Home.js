import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams, useRouteMatch, Route, Switch } from "react-router-dom";
//assests
import "./_home.scss";

const Home = ({ data }) => {
  const { female, name, id } = data;
  return (
    <>
      <Link to={`/${id}`}>
        <div className="container">
          <img
            src={female.image}
            alt="image of women in tech"
            className="container__image"
            alt={name}
            key={id}
          />
          <h1 className="container__header">{female.name}</h1>
          <p className="container__company">
            <b>Company:</b> {female.company}
          </p>
          <p className="container__job">
            <b>Job:</b> {female.job_title}
          </p>
          <a href={female.contact_link}>
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <p></p>
        </div>
      </Link>
    </>
  );
};
export default Home;
