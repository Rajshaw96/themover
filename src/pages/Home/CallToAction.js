import React from "react";
import "./CallToAction.css";
const CallToAction = () => {
  return (
    <div className="jumbotron text-center text-white p-5 calltoaction-container">
      <div className="container">
        <h2 className="text-white">Take Your Business to the Next Level</h2>
        <p className="text-white">
          Join us today and get access to exclusive resources that will help your business grow. To grow.
        </p>
        <a href="/contact-us" className="default-btn-one hover-black">Get Started</a>
      </div>
    </div>
  );
};

export default CallToAction;
