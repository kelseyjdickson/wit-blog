import React, { useState, useEffect } from "react";
//assests
import "./_home.scss";

const Home = ({ data }) => {
  const { female, name } = data;
  return (
    <>
      <div className="container">
        <img
          src={female.image}
          alt=""
          className="container__image"
          alt={name}
        />
        <h1 className="container__header">{female.name}</h1>
        <p className="container__company"><b>Company:</b> {female.company}</p>
        <p className="container__job"><b>Job:</b> {female.job_title}</p>
        <a href={female.contact_link}>
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </>
  );
};
export default Home;
