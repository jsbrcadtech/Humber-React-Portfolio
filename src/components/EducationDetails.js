import React from "react";
import axios from "axios";
import config from "../config.json";

function EducationDetails() {
  const [educationDetails, setEducationDetails] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + "/education")
      .then((response) => {
        console.log(response.data);
        setEducationDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul className="w3-ul w3-center">
      {educationDetails.map((education) => (
        <li>{education.description}</li>
      ))}
    </ul>
  );
}

export default EducationDetails;
