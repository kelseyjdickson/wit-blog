import  React from "react";

//assets
import part3 from "../images/part3.jpeg";

const Part3 = ({ data }) => {
    const info = data.map(yo => {
        if (yo.blog_num === 3) {
          return (
            <>
            <div key={yo.id}>
              <img style={{borderRadius: '100px'}}src={yo.female.image} alt="" />
              <h1>{yo.female.name}</h1>
              <h3>Company: {yo.female.company}</h3>
              <h3>Job Title: {yo.female.job_title}</h3>
              <a href={yo.female.contact_link}>Contact Info</a>
              </div>
              <hr></hr>
            </>
          );
        }
    });
    return(
        <>
        <img
          style={{ width: "600px", height: "417px" }}
          src={part3}
          alt="third blog"
          
        />
            <h1>Made it to Part 3- testings</h1>
            <h1>{info}</h1>
        </>
    );
};

export default Part3;