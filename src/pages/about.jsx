import React from "react";

export default function About() {
  return (
    <div class="A-us">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            {/* <!-- About Us Image Start --> */}
            <div class="about-image">
              {/* <!-- About Image Start --> */}
              <div class="about-img-1">
                {/* <figure class="reveal"> */}
                <img src="/images/about-img-1.jpg" alt="" />
                {/* </figure> */}
              </div>
              {/* <!-- About Image End --> */}

              {/* <!-- About Image Start --> */}
              <div class="about-img-2">
                {/* <figure class="reveal"> */}
                <img src="/images/about-img-2.jpg" alt="" />
                {/* </figure> */}
              </div>
              {/* <!-- About Image End --> */}
            </div>
            {/* <!-- About Us Image End --> */}
          </div>

          <div class="col-lg-6">
            {/* <!-- About Us Content Start --> */}
            <div class="about-content">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h3 class="wow fadeInUp">about us</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Your trusted partner in reliable car rental
                </h2>
                <p class="wow fadeInUp" data-wow-delay="0.25s">
                  Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga
                  Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor
                </p>
              </div>
              {/* <!-- Section Title End --> */}

              {/* <!-- About Content Body Start --> */}
              <div class="about-content-body">
                {/* <!-- About Trusted Booking Start --> */}
                <div
                  class="about-trusted-booking wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="icon-box">
                    <img src="/images/icon-about-trusted-1.svg" alt="" />
                  </div>
                  <div class="trusted-booking-content">
                    <h3>easy booking process</h3>
                    <p>
                      We Have Optimized The Booking Process So That Our Clients
                      Can Experience The Easiest And The Safest Service
                    </p>
                  </div>
                </div>
                {/* <!-- About Trusted Booking End --> */}

                {/* <!-- About Trusted Booking Start --> */}
                <div
                  class="about-trusted-booking wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <div class="icon-box">
                    <img src="/images/icon-about-trusted-2.svg" alt="" />
                  </div>
                  <div class="trusted-booking-content">
                    <h3>convenient pick-up & return process</h3>
                    <p>
                      We Have Optimized The Booking Process So That Our Clients
                      Can Experience The Easiest And The Safest Service
                    </p>
                  </div>
                </div>
                {/* <!-- About Trusted Booking End --> */}
              </div>
              {/* <!-- About Content Body End --> */}

              {/* <!-- About Content Footer Start --> */}
              <div
                class="about-content-footer wow fadeInUp"
                data-wow-delay="1s"
              >
                <a href="#" class="btn-default">
                  contact us
                </a>
              </div>
              {/* <!-- About Content Footer End --> */}
            </div>
            {/* <!-- About Us Content End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
