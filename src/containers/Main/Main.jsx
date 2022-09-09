import React from "react";
import "./Main.scss";
import Home from "../../components/Home/Home";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About"
import ProjectList from "../../components/ProjectList/ProjectList";


const Main = ({projects}) => {
  return (
    <div className="main">
      <Home/>
      <Skills/>
      <ProjectList projects={projects}/>
      <About/>
      <Footer/>

    </div>
  )
}

export default Main;