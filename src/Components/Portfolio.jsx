import React, { useEffect, useRef } from "react";
import image from "../images/technology.jpg";

const imageAltText = "a computer keyboard with blue backlighting";

const projectList = [
  {
    title: "Azure Databricks Formula1 Project",
    description:
      "Data Engineering ETL Project on Formula1 Racing using Azure Databricks and Azure Data Factory .",
    url: "https://github.com/ayush9892/Azure_Databricks_Formula1",
  },
  {
    title: "Azure Data Factory COVID_19 Reporting Project",
    description:
      "Data Engineering ETL Project on Covid19 Reporting Using Azure Data Factory and Databricks.",
    url: "https://github.com/ayush9892/Azure_Data_Factory_COVID_19_Reporting",
  },
];

const Portfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "1s ease-out 0s 1 slideIn";
          observer.unobserve(entry.target); // Stop observing the target
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <section className="padding" id="portfolio" ref={portfolioRef}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
