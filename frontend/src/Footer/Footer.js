import React from "react";
import { Link } from "react-router-dom";
//assets
import "./_footer.scss";


const Footer = () => {
  return (
    <>
    {/* <div> */}
      <div className="footer">
        <div className="footer__right">
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
            <div className="contact-div">
            <div className="connect-icon">
              <a
                className="mail"
                href="mailto:kelseymedved@gmail.com?subject=WIT"
              >
                <i class="far fa-envelope"></i>
              </a>
            </div>
            <div className="connect-icon">
              <a
                className="linked"
                href="https://www.linkedin.com/in/kelseydickson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"> </i>
              </a>
            </div>
            <div className="connect-icon">
              <a
                className="twitter"
                href="https://twitter.com/KelseyD485"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
            <div className="connect-icon">
              <a
                className="medium"
                href="https://kelseyjdickson.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-medium"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
