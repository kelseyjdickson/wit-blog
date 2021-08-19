import  React from "react";



//assets
import './_part1.scss'
import part1 from "../images/womenintech.jpeg";



const Part1 = ({ data }) => {

    // const info = data.map(yo => {
    //     if (yo.blog_num === 1) {
    //       return (
    //         <div key={yo.id}>
    //           <img style={{borderRadius: '100px'}}src={yo.data.image} alt="" />
    //           <h1>{yo.data.name}</h1>
    //           <h3>Company: {yo.data.company}</h3>
    //           <h3>Job Title: {yo.data.job_title}</h3>
    //           <a href={yo.data.contact_link}>Contact Info</a>
    
    //           <hr></hr>
    //         </div>
    //       )
    //     } else {
    //       return null;
    //     }
    //   });
    
   
    
    
    return(
        <>
        <img
          style={{ width: "600px", height: "417px" }}
          src={part1}
          alt="first blog"
          
        />
            <h1>Made it to Part 1</h1>
            {/* {info} */}
           {/* <h1>{info}</h1> */}
            
        </>
    )
};

export default Part1;