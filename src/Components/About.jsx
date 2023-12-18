/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/cloud.jpg";

const imageAltText =
  "a graphical representation of cloud computing infrastructure, with various device icons connected to a central cloud icon, set against a dark background with a subtle grid pattern and blurred server racks";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a data enthusiast who loves to explore the hidden patterns and insights from data. I applied my skills to analyze and transform data to uncover insights into customer usage patterns and behavior.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Spark Applications",
  "ETL & ELT",
  "PySpark UDF",
  "ADF",
  "Databricks",
  "Synapse",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about learning new things and keeping myself updated with the latest trends. I am always eager to take on new challenges and opportunities that can help me grow and improve my skills.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#FFE4E1",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
