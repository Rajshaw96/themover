import React from "react";

import '../../assets/styles/ServiceHome.css'; // Add this file for custom styles
import icon1 from "../../assets/img/icon/icon1.png";
import icon2 from "../../assets/img/icon/icon2.png";
import icon3 from "../../assets/img/icon/icon3.png";
import icon4 from "../../assets/img/icon/icon4.png";
import icon5 from "../../assets/img/icon/icon5.png";
import icon6 from "../../assets/img/icon/icon6.png";
import { Link } from "react-router-dom";
const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="service-card width-giv position-relative">
        <img src={image} alt={title} className="img-fluid" />
        <div className="overlay">
          <h4 className="">{title}</h4>
          <p className="text-black">{description}</p>
          <Link to="/Services" className="default-btn-one">Read More</Link>
        </div>
      </div>
    </div>
  );
};

const ServiceHome = () => {
  const services = [
    {
      image: icon1,
      title: "Cost Optimization",
      description: "We provide cost-effective transport solutions to optimize expenses.",
    },
    {
      image: icon2,
      title: "Reduced Transit Timing",
      description: "Efficient logistics ensuring faster and timely deliveries.",
    },
    {
        image: icon4,
        title: "Safe & Secure Packaging",
        description: "Professional packaging services to ensure goods' safety.",
      },
  ];

  return (
    <div className="container  pb-3">
      <div className="row g-sm-4 change-gap">
      <h2>Services</h2>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceHome;
