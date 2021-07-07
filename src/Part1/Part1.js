import  React from "react";

//assets
import part1 from "../images/womenintech.jpeg";
import joy from './joy.png'
import kristal from './kristal.png'
import erika from './erika.png'
import kimberly from './kimberly.png'
import reshma from './reshma.png'

let part1Data = [
    {
        id: 0,
        name: 'Joy Buolamwini',
        company: "Algorithmic Justice League",
        job_title: 'Computer Scientist - Poet of Code',
        contact_link: 'https://www.linkedin.com/in/buolamwini/',
        image: joy

    },
    {
        id:1,
        name: 'Kristal Garcia',
        company: "Year One",
        job_title: 'Chief Strategy Officer',
        contact_link: 'https://www.linkedin.com/in/kgarcia4/',
        image: kristal
      
      },
      {
        id:2,
        name: 'Erica Joy Baker',
        company: "Github",
        job_title: 'Director of Engineering',
        contact_link: 'https://www.linkedin.com/in/ericajoy/',
        image: erika

      },
      {
          id:3,
          name: 'Kimberly Bryant',
          company: "Black Girls Code",
          job_title: 'Founder and CEO of Black Girls Code',
          contact_link: 'https://www.linkedin.com/in/kimberlybryant/',
          image: kimberly

      },
      {
          id:4,
          name: 'Reshma Saujani',
        company: "Girls Who Code",
        job_title: 'Founder of Girls Who Code',
        contact_link: 'https://www.linkedin.com/in/reshma-saujani/',
        image: reshma

      }
    
]

const Part1 = () => {
    let part1Women = part1Data.map((women) => {
        return (
            <div key={women.id} >
            <h1>{women.name}</h1>
            <img src={women.image} alt="women to watch part 1 photos"/>
            </div>
        )
    })
    return(
        <>
        <img
          style={{ width: "600px", height: "417px" }}
          src={part1}
          alt="first blog"
          
        />
            <h1>Made it to Part 1</h1>
            {part1Women}
        </>
    )
}

export default Part1