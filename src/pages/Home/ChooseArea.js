import React from "react";
// import Shape2 from "../../assets/img/shape/shape2.png";
import Shape5 from "../../assets/img/shape/shape5.png";
import { Link } from "react-router-dom";


const ChooseArea = () => {
  return (
    <>
      <div className="choose-area ptb-100">
        <div className="shape-one">
          <img src={Shape5} alt="Shape1" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bx-world"></i>
                  <h3>Worldwide Service</h3>
                  <p>
                  We provide seamless international shipping services, ensuring your packages reach any destination quickly and safely. With a global network of logistics partners, we make worldwide delivery effortless.
                  </p>
                </div>
              </div>

              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bxs-paper-plane"></i>
                  <h3>Tracking Service</h3>
                  <p>
                  Stay informed with real-time tracking. Our advanced tracking system lets you monitor your shipments at every stage, giving you peace of mind from dispatch to delivery.
                  </p>
                </div>
              </div>

              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bxs-truck"></i>
                  <h3>Fast and Reliable</h3>
                  <p>
                  Speed and reliability are our top priorities. Our efficient logistics network ensures timely deliveries, keeping your business running smoothly without delays.
                  </p>
                </div>
              </div>

              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bx-support"></i>
                  <h3>24/7 Support</h3>
                  <p>
                  We’re here for you anytime, anywhere. Our dedicated support team is available 24/7 to assist with inquiries, track shipments, and provide solutions for your logistics needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="choose-text">
                <div className="section-title">
                  <span>Why Choose Us</span>
                  <h2>Safe and Faster Logistic Service Neer You</h2>
                </div>
                <p>
                We are committed to delivering secure, efficient, and hassle-free logistics solutions tailored to your needs. Our team works tirelessly to provide top-tier shipping and transport services, ensuring your goods reach their destination on time and in perfect condition.
                </p>

                <p>
                With state-of-the-art tracking, a global logistics network, and a customer-first approach, we make shipping easy and stress-free.
                </p>
                <p><b>Experience the best in logistics with us!</b></p>
                  <Link to="/contact-us" className="default-btn-one">Contact Us</Link>
              
                
                <div className="shape-image">
                  <img src="assets/img/shape/shape2.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseArea;
