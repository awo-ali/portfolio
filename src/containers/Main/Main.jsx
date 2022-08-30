import React from "react";
import "./Main.scss";
import Home from "../../components/Home/Home";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About"


const Main = () => {
  return (
    <div className="main">
      <Home/>
      <Skills/>
      <About/>
      <Footer/>

    </div>
  )
}

export default Main;