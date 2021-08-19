import React, { useState, useEffect } from "react";
import axios from "axios";

//assets
import part2 from "../images/yellowwit.jpeg";

const Part2 = ({ data }) => {
  const info = data.map(yo => {
    if (yo.blog_num === 2) {
      return (
        <div key={yo.id}>
          <img style={{borderRadius: '100px'}}src={yo.female.image} alt="" />
          <h1>{yo.female.name}</h1>
          <h3>Company: {yo.female.company}</h3>
          <h3>Job Title: {yo.female.job_title}</h3>
          <a href={yo.female.contact_link}>Contact Info</a>

          <hr></hr>
        </div>
      );
    }
  });


  return (
    <>
      <img
        style={{ width: "600px", height: "417px" }}
        src={part2}
        alt="second blog"
      />
      <h1>Made it to Part 2</h1>
      <h1>{info}</h1>
    </>
  );
};

export default Part2;
