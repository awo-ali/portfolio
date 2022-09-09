import React from "react";
import "./About.scss";
import photo from "../../assets/images/photo.png";
import squiggle from "../../assets/images/squiggle.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h1 id="about" className="about__title">
          About Me
        </h1>
        <p className="about__info">
          I'm a qualified pharmacist with excellent analytical & communication
          skills, seeking a new and challenging career in the tech world!
          Self-motivated and driven, I have a long history of leading and
          participating in community led projects.
          <br /> <br />
          After much research and introspection, I came to the realisation that
          a career in software development would be a great fit for me, as it
          engages my creativity and eye for detail. I've just completed a 12
          week full-time software development course with _nology. The
          experience far exceeded my expectations. It took me from a zero
          coding, non-tech background to an independent developer with a solid
          foundation. 
          <br /> <br />
          As a career changer, I can bring great enthusiasm and a
          fresh perspective to any team I join. I am looking for a company with
          purpose and vision that will provide me with the opportunity to learn
          and grow holistically.
        </p>
      </div>
      <div className="about__photo">
        <img className="about__image" src={photo} alt="" />
        <img className="about__squiggle" src={squiggle} alt="" />
      </div>
    </div>
  );
};

export default About;
