import React from "react";

export default function CTABox() {
  return (
    <div class="cta-box bg-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-7">
            {/* <!-- Cta Box Content Start --> */}
            <div class="cta-box-content">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Ready to hit the road? Book your car today !
                </h2>
                <p class="wow fadeInUp">
                  Our friendly customer service team is here to help. Contact us
                  anytime for support and inquiries.
                </p>
              </div>
              {/* <!-- Section Title End --> */}

              {/* <!-- Cta Box Btn Start --> */}
              <div class="cta-box-btn wow fadeInUp" data-wow-delay="0.5s">
                <a href="#" class="btn-default">
                  contact us
                </a>
              </div>
              {/* <!-- Cta Box Btn End --> */}
            </div>
            {/* <!-- Cta Box Content End --> */}
          </div>

          <div class="col-lg-6 col-md-5">
            {/* <!-- Cta Box Image Start --> */}
            <div class="cat-box-image">
              <figure>
                <img src="/images/cta-car-img.png" alt="" />
              </figure>
            </div>
            {/* <!-- Cta Box Image End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
