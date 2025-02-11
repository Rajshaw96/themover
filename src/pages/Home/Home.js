import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ServicesArea from "./ServicesArea";
import ChooseArea from "./ChooseArea";
import TransportationArea from "./TransportationArea";
import Counter from "../Home/Counter";
import MegaImage from "../../MainHeaderPages/MegaImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/HeroSlider.css";
import ServiceHome from "./ServiceHome";
import LogisticsSection from "./LogisticsSection";
import CallToAction from "./CallToAction";
import FlipBoxSection from "./FlipBox";
const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bgClass: "item-bg1",
      title: "Transport & Logistic Services 24x7 Support Available",
      description: "We provide seamless transportation and logistics solutions with round-the-clock support to ensure smooth and timely deliveries.",
    },
    {
      id: 2,
      bgClass: "item-bg2",
      title: "Reliable Logistic Support",
      description: "Count on our dependable logistics services to streamline your supply chain and enhance efficiency with minimal disruptions.",
    },
    {
      id: 3,
      bgClass: "item-bg3",
      title: "Efficient Freight & Transport Services Round-the-Clock Support",
      description: "Our freight and transport solutions guarantee fast, secure, and efficient deliveries with 24/7 customer assistance.",
    },
    {
      id: 4,
      bgClass: "item-bg4",
      title: "Fast & Safe Logistic Delivery 24x7 Availability",
      description: "We prioritize speed and safety in our logistic deliveries, ensuring your goods reach their destination securely and on time.",
    },
    {
      id: 5,
      bgClass: "item-bg5",
      title: "Comprehensive Logistic Services Available Anytime",
      description: "From warehousing to last-mile delivery, our comprehensive logistics solutions cater to all your transportation needs anytime, anywhere.",
    },
    {
      id: 6,
      bgClass: "item-bg6",
      title: "Reliable Transport & Logistic Solutions 24x7 Support",
      description: "Experience top-notch transport and logistics services backed by our dedicated team, available 24/7 to assist you.",
    },
    {
      id: 7,
      bgClass: "item-bg7",
      title: "Seamless Transportation Services Always Ready to Assist",
      description: "We ensure smooth and hassle-free transportation services, making logistics management easier and more efficient for you.",
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
    <div className="hero-slider">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`hero-slider-item ${slide.bgClass}`}>
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <span>Since 1998</span>
                    <h1>{slide.title}</h1>
                    <Link to="/contact-us" className="default-btn-one">
                      Contact Us
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
      <LogisticsSection />
      <ChooseArea />
      <Counter />
      <MegaImage />
      <ServiceHome />
      <FlipBoxSection/>
      <CallToAction/>
      {/* <TransportationArea /> */}
    </>
  );
};

export default HomePage;
