import React from "react";
import "./Project.scss";
import code from "../../assets/images/code.png"
import eye from "../../assets/images/eye-1.png"
import iris from "../../assets/images/eye-2.png"

const Project = (props) => {

  const {language, title, description } = props;

  return (
    <div className="project">
     
      <div className="project__screenshot">
        <img src="" alt="" />
      </div>
      <div className="project__language">{language}</div>
      <h2 className="project__title">{title}</h2>
      <p className="project__description">{description}</p>
      <div className="project__links">
        <div className="project__links-styling">
          <a className="project__link" href="">Code</a>
          {/* <div className="project__links-styling">Code</div> */}
          <img src={code} alt="" />
        </div>
        <div className="project__links-styling">
          <a className="project__link" href="">Site</a>
          {/* <div className="project__links-styling">Site</div> */}
          <div className="project__eye">
          <img className="project__eye-1" src={eye} alt="" />
          <img className="project__eye-2" src={iris} alt="" />
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Project;
