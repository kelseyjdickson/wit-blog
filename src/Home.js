import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
//components
import Header from "./Header/Header";
//assests
import part1 from "./images/womenintech.jpeg";
import part2 from "./images/yellowwit.jpeg";
import part3 from "./images/part3.jpeg";

const Home = ({ data }) => {
  return (
    <>
      <Header />
      {data.map(womenInfo => {
        return (
          <div key={womenInfo.id}>
            <h1>{womenInfo.female.name}</h1>
            <img src={womenInfo.female.image} alt="image of wit" />
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
