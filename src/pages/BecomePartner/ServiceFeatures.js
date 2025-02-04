import React from "react";
import "./ServiceFeatures.css"; // Add custom styling if needed

const ServiceFeatures = () => {
  const features = [
    {
      icon: "🚚", // Replace with actual image source if needed
      title: "Wide Range of Goods Vehicles Available for Rent",
      description: "From Tata Ace to Pickup 8FT to Canter 14FT – whatever you need, we've got it!",
    },
    {
      icon: "📅",
      title: "Goods transport services available 24/7",
      description: "Easily book trucks through the Porter app anytime, at your convenience.",
    },
    {
      icon: "📱",
      title: "A seamless and user-friendly goods transportation app.",
      description: "Booking, selecting, and ordering a truck is effortless. Getting a quick fare estimate is even simpler.",
    },
  ];

  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold mb-4">Porter Services</h2>
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div className="col-md-4 col-sm-12" key={index}>
            <div className="feature-card p-4">
              <div className="icon mb-3">{feature.icon}</div>
              <h5 className="fw-bold">{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
