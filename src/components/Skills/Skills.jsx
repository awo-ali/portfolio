import React from "react";
import "./Skills.scss";
import GIT from "../../assets/images/GIT.png"
import HTML5 from "../../assets/images/HTML5.png"
import CSS3 from "../../assets/images/CSS3.png"
import Javascript from "../../assets/images/Javascript.png"
import SCSS from "../../assets/images/SCSS.png"
import BEM from "../../assets/images/BEM.png"
import REACT from "../../assets/images/REACT.png"
import JAVA from "../../assets/images/JAVA.png"
import Spring from "../../assets/images/Spring.png"

const Skills = () => {
  return (
    <div className="skills">
        <h1 className="skills__title">Techinal Skills</h1>
        <p className="skills__description">These are some of the technical skills I have acquired on my journey to becoming a junior full-stack software developer.</p>
     <div className="skills__list">
        <div className="skills__block">
            <img className="skills__icons" src={GIT} alt="" />
            <p className="skills__styling">GIT</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons" src={HTML5} alt="" />
            <p className="skills__styling" >HTML5</p>
        </div>
        <div className="skills__block" >
            <img className="skills__icons" src={CSS3} alt="" />
            <p className="skills__styling" >CSS3</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons" src={Javascript} alt="" />
            <p className="skills__styling" >Javascript</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons" src={SCSS} alt="" />
            <p className="skills__styling" >SCSS</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons"  src={BEM} alt="" />
            <p className="skills__styling" >BEM</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons" src={REACT} alt="" />
            <p className="skills__styling" >REACT</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons" src={JAVA} alt="" />
            <p className="skills__styling" >JAVA</p>
        </div>
        <div className="skills__block">
            <img className="skills__icons" src={Spring} alt="" />
            <p className="skills__styling" >Spring Boot</p>
        </div>
     </div>
    </div>
  )
}

export default Skills;