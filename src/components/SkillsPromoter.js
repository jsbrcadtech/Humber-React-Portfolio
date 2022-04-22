import React, { useState } from "react";
import Skills from "./Skills";

function SkillsPromoter() {
  return (
    <section className="w3-container">
      <h2 className="w3-center w3-container__title">What I Can do</h2>
      <div className="w3-content w3-center w3-padding-32">
        {<Skills />}
        <h2 className="w3-container__title">Web Developer</h2>
        <p className="w3-container__body-content">#Passion4Learning</p>
      </div>
    </section>
  );
}

export default SkillsPromoter;
