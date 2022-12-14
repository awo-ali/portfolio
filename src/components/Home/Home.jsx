import React from "react";
import "./Home.scss";
import wave from "../../assets/images/waving-hand-emoji.png";
import underline from "../../assets/images/underline.png";
import arrow from "../../assets/images/downward-arrow.png";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home__intro">
        <h1 className="home__intro-styling">Hey! I'm Awo Ali</h1>
        <img className="home__icon" src={wave} alt="" />
      </div>
      <h2 className="home__title"> A Junior Software Developer</h2>
      <img className="home__underline" src={underline} alt="" />
      <h3 className="home__title">based in the UK.</h3>
      <a href="#projects" className="home__styling">
        <button className="home__button">
          Take a look at my work
          <img className="home__arrow-icon" src={arrow} alt="" />
        </button>
      </a>
    </div>
  );
};

export default Home;
