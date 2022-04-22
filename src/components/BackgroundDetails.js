import React from "react";
import axios from "axios";
import config from "../config.json";

function BackgroundDetails() {
  const [backgrounds, setBackgrounds] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + "/background")
      .then((response) => {
        // console.log(response.data);
        setBackgrounds(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul className="w3-ul w3-center">
      {backgrounds.map((background) => (
        <li>{background.description}</li>
      ))}
  </ul>
  );
}

export default BackgroundDetails;