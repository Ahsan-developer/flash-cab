import React from "react";

export default function IntroVideo() {
  return (
    <div class="intro-video bg-section parallaxie">
      <div class="container">
        <div class="row section-row">
          <div class="col-lg-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">watch full video</h3>
              <h2 class="text-anime-style-3" data-cursor="-opaque">
                Discover the ease and convenience of renting with Us
              </h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            {/* <!-- Intro Video Box Start --> */}
            <div class="intro-video-box">
              {/* <!-- Video Play Button Start --> */}
              <div class="video-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  class="popup-video"
                  data-cursor-text="Play"
                >
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
              {/* <!-- Video Play Button End --> */}

              {/* <!-- Client Slider Start --> */}
              <div class="client-slider">
                <div class="swiper client_logo_slider">
                  <div class="swiper-wrapper">
                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-1.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-2.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-3.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-4.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-5.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-6.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-5.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}

                    {/* <!-- company Logo Start --> */}
                    <div class="swiper-slide">
                      <div class="company-logo">
                        <img src="/src/images/client-logo-4.svg" alt="" />
                      </div>
                    </div>
                    {/* <!-- company Logo End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Client Slider End --> */}
            </div>
            {/* <!-- Intro Video Box End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
