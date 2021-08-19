import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
//components
import Header from "../Header/Header";
//assests
import './_home.scss'


const Home = ({ data }) => {
  return (
    <>
      <Header />
      {data.map(womenInfo => {
        return (
          <div key={womenInfo.id} className="container">
            <h1>{womenInfo.female.name}</h1>
            <img className="container__image"src={womenInfo.female.image} alt="women in tech" />
            <p>{womenInfo.name_of_blog}</p>
            <p>Company: {womenInfo.female.company}</p>
            <p>Job: {womenInfo.female.job_title}</p>
            <p>
              Contact Info: <a href={womenInfo.female.contact_link}>LinkedIn</a>
            </p>
          </div>
        );
      })}
     
    </>
  );
};

export default Home;
