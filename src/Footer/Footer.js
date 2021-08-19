import React from 'react'
import { Link } from "react-router-dom";
//assets
import './_footer.scss'


const Footer = () => {
    return(
        <>
        
        <div className="footer">
        <Link to="/about">
            About
        </Link>
        <p>Contact</p>

        </div>
    </>
    )
}

export default Footer