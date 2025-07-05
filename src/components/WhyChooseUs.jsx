import React from "react";

export default function WhyChooseUs() {
  return (
    <div class="why-choose-us">
      <div class="container">
        <div class="row section-row">
          <div class="col-lg-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">why choose us</h3>
              <h2 class="text-anime-style-3" data-cursor="-opaque">
                Unmatched quality and service for your needs
              </h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-4 col-md-6 order-lg-1 order-md-1 order-1">
            {/* <!-- Why Choose Item Start --> */}
            <div class="why-choose-item wow fadeInUp">
              <div class="icon-box">
                <img src="/src/images/icon-why-choose-1.svg" alt="" />
              </div>
              <div class="why-choose-content">
                <h3>extensive fleet options</h3>
                <p>
                  Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
                  Phasellus Hendrerit, Massa
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}

            {/* <!-- Why Choose Item Start --> */}
            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
              <div class="icon-box">
                <img src="/src/images/icon-why-choose-2.svg" alt="" />
              </div>
              <div class="why-choose-content">
                <h3>exceptional customer service</h3>
                <p>
                  Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
                  Phasellus Hendrerit, Massa
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}
          </div>

          <div class="col-lg-4 col-md-12 order-lg-2 order-md-3 order-2">
            <div class="why-choose-image">
              {/* <figure class="reveal"> */}
              <img src="/src/images/why-choose-img.jpg" alt="" />
              {/* </figure> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3">
            {/* <!-- Why Choose Item Start --> */}
            <div class="why-choose-item wow fadeInUp">
              <div class="icon-box">
                <img src="/src/images/icon-why-choose-3.svg" alt="" />
              </div>
              <div class="why-choose-content">
                <h3>convenient locations</h3>
                <p>
                  Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
                  Phasellus Hendrerit, Massa
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}

            {/* <!-- Why Choose Item Start --> */}
            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
              <div class="icon-box">
                <img src="/src/images/icon-why-choose-4.svg" alt="" />
              </div>
              <div class="why-choose-content">
                <h3>reliability and safety</h3>
                <p>
                  Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu.
                  Phasellus Hendrerit, Massa
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
