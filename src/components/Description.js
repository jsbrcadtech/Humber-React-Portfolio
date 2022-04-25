import React from "react";
import axios from "axios";
import config from "../config.json";

function Description() {
  const [pictures, setPictures] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + "/pictures")
      .then((response) => {
        // console.log(response.data);
        setPictures(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  return (
    <section className="w3-container ">
      <h2 className="w3-center w3-container__title">
        Hi, I'm Justus Santanna =)
      </h2>
      <p className="w3-center w3-container__subtitle">
        I'm a curious and resourceful web developper who enjoys learning and
        executing. I also have worked in the financial
        industry for more than 10 years. Web development has always been a passion
        in my life and I'm excited to join this programming world
        professionally. In my spare time, I enjoy playing the guitar, learn
        more about technology and finance, and spend time wiht family and friends.
      </p>
      <div className="w3-center w3-padding-32 w3-mypictures-container">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img
              src={picture.image}
              alt="This is Justus"
              width="310px"
              height="400px"
              className="w3-border w3-border-black"
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Description;
