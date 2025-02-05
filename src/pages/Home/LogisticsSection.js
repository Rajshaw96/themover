import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BGIMG from "../../assets/img/home/bgImg.png";
import "./LogisticsSection.css";
const LogisticsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='custom-padd' style={{
        backgroundImage: `url(${BGIMG})`, // Your background image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '50px',
      }}>
        <section
      className="container my-5 custom-marg"
      
    >
      <div className="text-center mb-5">
        <h2 className="const-col" data-aos="fade-up" >
          Our Logistics Services
        </h2>
        <p className="lead const-col" data-aos="fade-up" data-aos-delay="300" >
          We offer end-to-end logistics solutions to meet all your supply chain needs.
        </p>
      </div>

      <div className="row">
        {/* Service 1 - Transportation */}
        <div className="col-md-4 mb-4">
          <div className="card" data-aos="fade-up" data-aos-delay="400">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Transportation"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title const-col">Transportation</h5>
              <p className="card-text const-col">
                We offer fast, reliable, and cost-effective transportation services to move your goods across
                the country or internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 - Warehousing */}
        <div className="col-md-4 mb-4">
          <div className="card" data-aos="fade-up" data-aos-delay="500">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Warehousing"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title const-col">Warehousing</h5>
              <p className="card-text const-col">
                Our state-of-the-art warehouses ensure that your goods are safely stored and well-managed, ready
                for shipment at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 - Inventory Management */}
        <div className="col-md-4 mb-4">
          <div className="card" data-aos="fade-up" data-aos-delay="600">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Inventory Management"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title const-col">Inventory Management</h5>
              <p className="card-text const-col">
                Our inventory management system ensures accuracy and efficiency, helping you maintain optimal stock
                levels at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default LogisticsSection;
