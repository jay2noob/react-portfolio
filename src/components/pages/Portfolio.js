import React from "react";
import Project from "../../components/Project";
import projects from "../../projects.json";

function Portfolio() {
  return (
    <div id="main-container" className="container">
      <section className="main-section">
        <div className="row">
          <div className="col-md-12">
            <h1>Portfolio</h1>
          </div>
        </div>

        <div className="row">
          <Project
            name={projects[0].name}
            image={projects[0].image}
            link={projects[0].link}
          />

          <Project
            name={projects[1].name}
            image={projects[1].image}
            link={projects[1].link}
          />
        </div>

        <div className="row">
          <Project
            name={projects[2].name}
            image={projects[2].image}
            link={projects[2].link}
          />

          <Project
            name={projects[3].name}
            image={projects[3].image}
            link={projects[3].link}
          />
        </div>

        <div className="row">
          <Project
            name={projects[4].name}
            image={projects[4].image}
            link={projects[4].link}
          />

          <Project
            name={projects[5].name}
            image={projects[5].image}
            link={projects[5].link}
          />
        </div>

        <div className="row">
          <Project
            name={projects[6].name}
            image={projects[6].image}
            link={projects[6].link}
          />

          <div className="col-md-6"></div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
