import React from "react";
import './About.css'
import Header from "./Header";

function About({ user, handleLoginClick }) {
  return (
    <div>
      <Header user={user} handleLoginClick={handleLoginClick} />
      <div className="about">
          <h1>You command the canoe, we just help you paddle.</h1>
          <p>Canoe offers the ability to easily plan trips or log your past adventures!</p>
      </div>
    </div>
    
  );
}

export default About;
