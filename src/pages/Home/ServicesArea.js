import React, { useState } from "react";
import shape3 from '../../assets/img/shape/shape3.png'

const ServicesArea = () => {

  return (
    <>
              <div class="services-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span>Our Services</span>
                    <h2>Safe and Faster Logistic Services</h2>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="service-card">
                            <i class='bx bxs-ship'></i>
                            <h3>Ocean Cargo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="service-details.html" class="default-btn-two">Read More</a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="service-card">
                            <i class='bx bx-store'></i>
                            <h3>Cargo Storage</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="service-details.html" class="default-btn-two">Read More</a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="service-card">
                            <i class='bx bxs-truck'></i>
                            <h3>Courier Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="service-details.html" class="default-btn-two">Read More</a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="service-card">
                            <i class='bx bx-transfer'></i>
                            <h3>B2B Exchange</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="service-details.html" class="default-btn-two">Read More</a>
                        </div>
                    </div>
                </div>

                <div class="view-btn">
                    <a href="services.html" class="default-btn">View All</a>
                </div>
            </div>
            
            <div class="services-shape">

            </div>
        </div>
    </>
  );
};

export default ServicesArea;
