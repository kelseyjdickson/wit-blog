import React from "react";
import { Link } from "react-router-dom";
//assets
import "./_footer.scss";
import wit from "../images/Wit-1.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__right">
          <img className="footer__logo" src={wit} alt="logo" />
          <Link className="footer__about" to="/about">
            About
          </Link>
          <Link className="footer__resources" to="/resources">
            Resources
          </Link>
          <div class="column">
            <Link className="footer__contact" to="/contact">
              Contact
            </Link>
            <div className="connect-icon">
              <i class="far fa-envelope"></i>
            </div>
            <div className="connect-icon">
              <i class="fab fa-linkedin"></i>
            </div>
            <div className="connect-icon">
              <i class="fab fa-twitter-square"></i>
            </div>
            <div className="connect-icon">
              <i class="fab fa-medium"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
