import React from 'react'
import { Link } from "react-router-dom";
//assets
import './_footer.scss'


const Footer = () => {
    return(
        <>
        
        <div className="footer">
        <Link className="footer__about"to="/about">
            About
        </Link>
        <Link className="footer__contact"to="/contact">
            Contact
        </Link>
        <Link className="footer__resources"to="/resources">
            Resources
        </Link>

        </div>
    </>
    )
}

export default Footer