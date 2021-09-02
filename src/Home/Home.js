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
        
      {data && data.length > 0 && data.map(womenInfo => {
        return(
          <div key={womenInfo.id} className="container">
            <img className="container__image"src={womenInfo.female.image} alt="women in tech" />
            <h1 className="container__header">{womenInfo.female.name}</h1>
            <p className="container__company"><b>Company:</b> {womenInfo.female.company}</p>
            <p className="container__job"><b>Job:</b> {womenInfo.female.job_title}</p>
            
              <a href={womenInfo.female.contact_link}><i class="fab fa-linkedin fa-2x"></i></a>
            
          </div>
        );
      })}
     
    </>
  );
};

export default Home;
