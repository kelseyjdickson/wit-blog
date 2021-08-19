import  React, {useState, useEffect} from "react";


import { Link } from 'react-router-dom'
//components
import Header from './Header'
//assests
import part1 from "./images/womenintech.jpeg";
import part2 from "./images/yellowwit.jpeg";
import part3 from "./images/part3.jpeg";

const Home = ({data}) => {

   
    return(
        <>
        <Header/>
        {data.map((womenInfo) => {
            console.log(womenInfo, "info")
            return (
                <div key={womenInfo.id}>
                <h1>{womenInfo.female.name}</h1>
                <img src={womenInfo.female.image}/>
                </div>
            )
        })}
        <h1>HOME</h1>
        
        </>

    )
}

export default Home