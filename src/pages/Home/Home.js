import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ServicesArea from "./ServicesArea";
import ChooseArea from "./ChooseArea";
import TransportationArea from './TransportationArea'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bgClass: "item-bg1",
      title: "Transport & Logistic Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      bgClass: "item-bg2",
      title: "Reliable Logistic Support",
      description:
        "Efficient and seamless logistics to meet all your transport needs.",
    },
    {
      id: 3,
      bgClass: "item-bg3",
      title: "Innovative Solutions",
      description:
        "Creative and cutting-edge solutions to ensure faster delivery.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="hero-slider owl-carousel owl-theme">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`hero-slider-item ${slide.bgClass}`}>
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <span>Since 1992</span>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <Link to="/contact" className="default-btn-one me-3">
                      Contact Us
                    </Link>
                    <Link to="#" className="default-btn-two">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ServicesArea />
       <ChooseArea />
      <TransportationArea/>
    </>
  );
};

export default HomePage;
