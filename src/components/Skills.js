import React from "react";
import axios from "axios";
import config from "../config.json";

function Skills() {
  const [skills, setSkills] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + "/skills")
      .then((response) => {
        console.log(response.data);
        setSkills(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul className="w3-ul w3-container__skills">
      {
        skills.map((skill) => (
        <li className="w3-padding">
          <i className={`w3-container__skills__icons ${skill.icon}`}></i>
          <p className="w3-container__body-content">{skill.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
