import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import projectsArray from "./projects";
import "./App.scss";

console.log(projectsArray);


const App = () => {
  return (
    <div className="app">
     <Navbar/>
     <Main projects={projectsArray}/>
    </div>
  )
}

export default App

