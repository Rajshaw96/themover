import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Shape5 from "../../assets/img/flipbox/safesecure.jpg";
import Shape6 from "../../assets/img/flipbox/Deliver.jpg";
import Shape7 from "../../assets/img/flipbox/Price.jpg";
const flipBoxStyles = `
  .flip-box {
    background-color: transparent;
    width: 32%;
    height: 250px;
    perspective: 1000px;
  }
  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }
  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
    .flip-box-front::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
    .flip-box-front h3 {
    position: relative;
    z-index: 1;
  }
  .flip-box-back {
    background: #460b85;
    color: white;
    transform: rotateY(180deg);
    padding: 20px;
  }
`;

const FlipBox = ({ frontText, backText, imageUrl }) => {
  return (
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front" style={{ background: `url(${imageUrl}) center/cover no-repeat` }}>
          <h3 className="text-white">{frontText}</h3>
        </div>
        <div className="flip-box-back">
          <p className="text-white">{backText}</p>
        </div>
      </div>
    </div>
  );
};

const FlipBoxSection = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="pb-4">Why Choose Us?</h2>
      <style>{flipBoxStyles}</style>
      <div style={{gap: "20px"}} className="d-flex justify-content-around flex-wrap">
        <FlipBox frontText="Safe & Secure" backText="We ensure complete safety and security for your valuable belongings during transit." imageUrl={Shape5} />
        <FlipBox frontText="Timely Delivery" backText="We prioritize on-time delivery to make your moving experience smooth and stress-free." imageUrl={Shape6} />
        <FlipBox frontText="Affordable Pricing" backText="Our pricing is transparent and budget-friendly, ensuring you get the best service at the best rates." imageUrl={Shape7} />
      </div>
    </div>
  );
};

export default FlipBoxSection;
