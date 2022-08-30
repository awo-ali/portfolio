import React from "react";
import "./About.scss";
import photo from "../../assets/images/photo.png"
import squiggle from "../../assets/images/squiggle.png"

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h1 className="about__title">About Me</h1>
        <p className="about__info">
          Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc,
          viverra sed tortor non. Id at pellentesque mauris at tincidunt
          venenatis urna mus. Sodales pretium tempus tincidunt tellus in
          imperdiet. Integer fames maecenas amet, consequat. Et cursus gravida
          enim lorem urna, vivamus pulvinar porttitor. Ultrices neque nec
          feugiat ullamcorper ultricies ante sagittis commodo.
          <br />
           <br /> Nunc malesuada
          amet at eget consectetur sit. Nibh in ut diam nulla sed porttitor et.
          At neque tellus convallis urna, sodales neque. In enim auctor diam
          nunc duis rutrum adipiscing pellentesque eu. In sollicitudin neque
          dictum neque proin pretium ante. Ac bibendum vestibulum ullamcorper
          pellentesque scelerisque. Neque senectus eu dictum ultricies tellus
          nisl eget sem libero. Eu sit quis vestibulum donec cras elementum.
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
