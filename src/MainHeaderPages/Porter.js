import React  from 'react';
import '../assets/styles/Proter.css';
import Porter1 from '../assets/assert/Img-1.webp';
import Porter2 from '../assets/assert/Img-2.webp';
import Porter3 from '../assets/assert/Img-3.webp';
import Porter4 from '../assets/assert/Img-4.webp';
import { Link } from 'react-router-dom';

function Porter() {
  return (
    <div className="porter-container">
      <div className="city-selector">
        <span>City: </span>
        <Link to="/mega-image" className="mega-image-link">
          <i className="bi bi-geo-alt"></i> Coimbatore
        </Link>
      </div>

      <div className="services-options">
        <div className="service-options">
          <img src={Porter4} alt="Two Wheelers" className="service-icons" />
          <p>Two Wheelers</p>
        </div>
        <div className="service-options">
          <img src={Porter3} alt="Trucks" className="service-icons" />
          <p >Trucks</p>
        </div>
        <div className="service-options">
          <img src={Porter2} alt="Packers & Movers" className="service-icons" />
          <p >Packers & Movers</p>
        </div>
        <div className="service-options">
          <img src={Porter1} alt="Intercity Courier" className="service-icons" />
          <p>Intercity Courier Service</p>
        </div>
      </div>

      <div className="sticky-container">
      <Link to="/estimate" 
      
      >  
      Get an estimate
      <span className="estimate-time">(takes ~2 mins)</span>
      <svg
            width="50"
            height="50"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 5L15 10L10 15"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </Link> 
      </div>
    </div>
  );
}

export default Porter;
