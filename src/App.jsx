import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";


const App = () => {
  return (
    <div className="app">
     <Navbar/>
     <Main/>
    </div>
  )
}

export default App

