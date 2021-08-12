import React, { useState, useEffect } from "react";
import axios from "axios";

//assets
import part2 from "../images/yellowwit.jpeg";

const Part2 = ({ data }) => {
  const info = data.map(yo => {
    if (yo.blog_num === 2) {
      return (
        <>
          <img style={{borderRadius: '100px'}}src={yo.female.image} alt="" />
          <h1>{yo.female.name}</h1>
          <hr></hr>
        </>
      );
    }
  });
  // const blogTitle = data.map((info) => {
  //   console.log(info.blog_num)
  // })

  return (
    <>
      <img
        style={{ width: "600px", height: "417px" }}
        src={part2}
        alt="first blog"
      />
      <h1>Made it to Part 2</h1>
      <h1>{info}</h1>
    </>
  );
};

export default Part2;
