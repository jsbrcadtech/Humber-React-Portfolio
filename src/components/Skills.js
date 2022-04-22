import React from "react";

function Skills({icon, name}) {

  return (
        <li className="w3-padding">
          <i className={`w3-container__skills__icons ${icon}`}></i>
          <p className="w3-container__body-content">{name}</p>
        </li>
  );
}

export default Skills;
