import React from "react";
import { Link } from "react-router-dom";

import "./_home.scss";

const Home = ({ data }) => {
  const { female,  id } = data;
  const {name } = female;
  console.log(female)
  return (
    <>
      <Link to={`/${id}`}>
        <div className="container">
          <img
            src={female.image}
            className="container__image"
            alt={`Showcasing: ${name}`}
            key={id}
          />
          <h1 className="container__header">{female.name}</h1>
          <p className="container__company">
            <b>Company:</b> {female.company}
          </p>
          <p className="container__job">
            <b>Job:</b> {female.job_title}
          </p>

          <p></p>
        </div>
      </Link>
    </>
  );
};
export default Home;
