import React from "react";
//import Header from "../Header";

function About() {
  return (
    <div id="main-container" class="container">
      <section className="main-section">
        <div className="row">
          <div className="col-md-12">
            <h1>About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img
              src="images/profile-pic.jpg"
              className="img-fluid"
              alt="John Fields"
            />
          </div>
          <div className="col-md-9">
            <p>
              My name is John Fields and I am a Truck Driver with Lynn H. Scott,
              Inc. I am currently attending a coding bootcamp at Case Western
              Reserve University. Upon graduation I will be trained in the MERN
              stack of web design.
            </p>

            <p>
              I can't wait to be able to apply my new coding skills in a new
              career. I will be able to use my newly acquired skill set with my
              planning and logistical abilities I've learned as a Truck Driver.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
