import  React, {useState, useEffect} from "react";


import { Link } from 'react-router-dom'
//components
import Header from './Header'
//assests
import part1 from "./images/womenintech.jpeg";
import part2 from "./images/yellowwit.jpeg";
import part3 from "./images/part3.jpeg";

const Home = () => {
   
    return(
        <>
        <Header/>
        <Link to="/part1">
            <img src={part1} alt=" wit blog 1"/>
        </Link>
        <Link to="/part2">
            <img src={part2} alt="wit blog 2"/>
        </Link>
        <Link to="/part3">
            <img src={part3} alt="wit blog 3"/>
        </Link>
        </>

    )
}

export default Home