import React from "react";
import data from "../../data/data.json"
import "./Projects.css"

const Projects = () => {
  return (
    <section className="portfolio--section" id="projects">
      <div className="portfolio--container-box">
        <div className="section-content">
          <p className="section--title">My Recent</p>
          <h2 className="section--heading">Projects</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <button className="text-sm portfolio--link" onClick={() => window.open(`${item.gitlink}`, "nofererror")}>
                GitHub
              </button>
              {
                item.demolink?<button className="text-sm portfolio--link">
                Live Demo
              </button>:
              null
              }
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
