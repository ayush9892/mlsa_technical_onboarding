import React from "react";
import image from "../images/study.jpg";

const imageAltText = "Study, School learn, Education image";

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#DCDCDC",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <div className="container">
          <div className="education__container">
            <div className="education__item" style={{ textAlign: "center" }}>
              <ul>
                <li style={{ whiteSpace: "nowrap" }}>
                  <h3>Bachelors of Technology in Computer Science</h3>
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      <p className="education__item--description">JIS University, Kolkata</p>
                    </li>
                    <li>
                      <p className="education__item--description">
                        Year of Graduation: Expected July 2024
                      </p>
                    </li>
                    <li>
                      <p className="education__item--description">Maintain CGPA: 8.58/10.0</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="education__item" style={{ textAlign: "center" }}>
              <ul>
                <li style={{ whiteSpace: "nowrap" }}>
                  <h3>CBSE: Senior Secondary School</h3>
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      <p className="education__item--description">GGPS, Bokaro Steel City</p>
                    </li>
                    <li>
                      <p className="education__item--description">Year of Passing: May 2019</p>
                    </li>
                    <li>
                      <p className="education__item--description">Scored 74.60%</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
