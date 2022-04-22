import React from "react";
import axios from "axios";
import config from "../config.json";

function Footer() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(()=>{
    axios
      .get(config.BASE_URL + "/contacts")
      .then((response)=>{
        console.log(response.data);
        setContacts(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  },[]);

    return (
      <footer className="w3-section w3-center">
        <div className="w3-padding-16">
            <a href="https://github.com/jsbrcadtech"><i className="fab fa-github fa-3x w3-margin-right"></i></a>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-3x w3-margin-right"></i></a>
            <a href="https://www.linkedin.com/in/justusinwebandfinance/"><i className="fab fa-linkedin-in fa-3x w3-margin-right"></i></a>
            <a href="https://twitter.com/"><i className="fab fa-twitter-square fa-3x w3-margin-right"></i></a>
        </div>
        <div className="w3-padding-16">
        {
          contacts.map((contact)=>(
          <>
            
            <a href="mailto:"> Email {contact.email}</a>
            <p>Phone {contact.phone}</p>
          </>
        ))}
          <p>&copy;2022 All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
