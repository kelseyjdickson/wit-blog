import  React from "react";



//assets
import './_part1.scss'
import part1 from "../images/womenintech.jpeg";



const Part1 = ({ data }) => {
    const info = data.map(yo => {
        if (yo.blog_num === 1) {
          return (
            <>
              <img style={{borderRadius: '100px'}}src={yo.female.image} alt="" />
              <h1>{yo.female.name}</h1>
              <h3>Company: {yo.female.company}</h3>
              <h3>Job Title: {yo.female.job_title}</h3>
              <a href={yo.female.contact_link}>Contact Info</a>
    
              <hr></hr>
            </>
          );
        }
      });
    
   
    
    
    return(
        <>
        <img
          style={{ width: "600px", height: "417px" }}
          src={part1}
          alt="first blog"
          
        />
            <h1>Made it to Part 1</h1>
           <h1>{info}</h1>
            
        </>
    )
};

export default Part1;