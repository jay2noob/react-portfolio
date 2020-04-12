import React from "react";

function Project({ image, link, name }) {
  return (
    <div className="col-md-6">
      <div className="work">
        <img src={image} class="img-fluid" alt={name} />

        <h3>
          <a href={link}>{name}</a>
        </h3>
      </div>
    </div>
  );
}

export default Project;
