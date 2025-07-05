import React from "react";

export default function Services() {
  return (
    <div class="our-services bg-section">
      <div class="container">
        <div class="row section-row">
          <div class="col-lg-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">our services</h3>
              <h2 class="text-anime-style-3" data-cursor="-opaque">
                Explore our wide range of rental services
              </h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6">
            {/* <!-- Service Item Start --> */}
            <div class="service-item wow fadeInUp">
              <div class="icon-box">
                <img src="/src/images/icon-service-1.svg" alt="" />
              </div>
              <div class="service-content">
                <h3>car rental with driver</h3>
                <p>Enhance your rental experience with additional options.</p>
              </div>
              <div class="service-footer">
                <a href="#" class="section-icon-btn">
                  <img src="/src/images/arrow-white.svg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- Service Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- Service Item Start --> */}
            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
              <div class="icon-box">
                <img src="/src/images/icon-service-2.svg" alt="" />
              </div>
              <div class="service-content">
                <h3>business car rental</h3>
                <p>Enhance your rental experience with additional options.</p>
              </div>
              <div class="service-footer">
                <a href="#" class="section-icon-btn">
                  <img src="/src/images/arrow-white.svg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- Service Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- Service Item Start --> */}
            <div class="service-item wow fadeInUp" data-wow-delay="0.5s">
              <div class="icon-box">
                <img src="/src/images/icon-service-3.svg" alt="" />
              </div>
              <div class="service-content">
                <h3>airport transfer</h3>
                <p>Enhance your rental experience with additional options.</p>
              </div>
              <div class="service-footer">
                <a href="#" class="section-icon-btn">
                  <img src="/src/images/arrow-white.svg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- Service Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- Service Item Start --> */}
            <div class="service-item wow fadeInUp" data-wow-delay="0.75s">
              <div class="icon-box">
                <img src="/src/images/icon-service-4.svg" alt="" />
              </div>
              <div class="service-content">
                <h3>chauffeur services</h3>
                <p>Enhance your rental experience with additional options.</p>
              </div>
              <div class="service-footer">
                <a href="#" class="section-icon-btn">
                  <img src="/src/images/arrow-white.svg" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- Service Item End --> */}
          </div>

          <div class="col-lg-12">
            {/* <!-- Service Box Footer Start --> */}
            <div class="services-box-footer wow fadeInUp" data-wow-delay="1s">
              <p>
                Discover our range of car rental services designed to meet all
                your travel needs. From a diverse fleet of vehicles to flexible
                rental plans.
              </p>
              <a href="#" class="btn-default">
                view all service
              </a>
            </div>
            {/* <!-- Service Box Footer End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
