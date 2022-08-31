import React from "react";
import "./Footer.scss";
import github from "../../assets/images/github-icon.png";
import linkedin from "../../assets/images/linkedin-icon.png";
import CV from "../../assets/images/cv-icon.png";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="footer__email">awoali@hotmail.co.uk</div>

      <ul className="footer__info">
        <li>
          <a href="https://github.com/awo-ali/portfolio"  className="footer__github">
            <img className="footer__icons" src={github} alt="" />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/awo-ali/" className="footer__linkedin">
            <img className="footer__icons" src={linkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="file:///C:/Users/Student/Documents/nology/Awo_Ali_Profile.pdf"  className="footer__cv">
            <img className="footer__icon-cv" src={CV} alt="" />
          </a>
        </li>
      </ul>
      {/* <div className="footer__info">         
      <div className="footer__github">
          <img className="footer__icons" src={github} alt="" />
        </div>
        <div className="footer__linkedin">
        <img className="footer__icons"  src={linkedin} alt="" />
        </div>
        <div className="footer__cv">
        <img className="footer__icon-cv"  src={CV} alt="" />
        </div>
       </div> */}
    </div>
  );
};

export default Footer;
