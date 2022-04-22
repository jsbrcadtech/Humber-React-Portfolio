import React from "react";
import axios from "axios";
import config from "../config.json";
import Background from "./Background";

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
        // console.log(error);
      });
  }, []);
  return (
    <>
    <section className="w3-container ">
      <h2 className="w3-center w3-container__title">Business Experience</h2>
    </section>
      <ul className="w3-ul w3-center">
        {backgrounds.map((background) => (<Background description = {background.description} key = {background.id}/>))}
    </ul>
    </>
  );
}

export default BackgroundDetails;