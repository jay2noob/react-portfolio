import React from "react";

function Contact() {
  return (
    <div id="main-container" class="container">
      <section className="main-section">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact</h1>
          </div>
        </div>

        <div>
          <p>Phone: 330-205-1222</p>
          <p>
            Email: <a href="jjfields24@outlook.com">jjfields24@outlook.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/john-fields-8677bb196">
              www.linkedin.com
            </a>
          </p>
          <p>
            Github:{" "}
            <a href="https://github.com/jay2noob">
              https://github.com/jay2noob
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
