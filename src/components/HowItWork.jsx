import React from "react";

export default function HowItWork() {
  return (
    <div class="how-it-work">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            {/* <!-- How Work Content Start --> */}
            <div class="how-work-content">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h3 class="wow fadeInUp">how it work</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Streamlined processes for a hassle-free experience
                </h2>
                <p class="wow fadeInUp" data-wow-delay="0.25s">
                  Our streamlined process ensures a seamless car rental
                  experience from start to finish. With easy online booking,
                  flexible pick-up and drop-off options.
                </p>
              </div>
              {/* <!-- Section Title End --> */}

              {/* <!-- How Work Accordion Start --> */}
              <div class="how-work-accordion" id="workaccordion">
                {/* <!-- FAQ Item Start --> */}
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                  <div class="icon-box">
                    <img src="/images/icon-how-it-work-1.svg" alt="" />
                  </div>
                  <h2 class="accordion-header" id="workheading1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#workcollapse1"
                      aria-expanded="true"
                      aria-controls="workcollapse1"
                    >
                      browse and select
                    </button>
                  </h2>
                  <div
                    id="workcollapse1"
                    class="accordion-collapse collapse show"
                    aria-labelledby="workheading1"
                    data-bs-parent="#workaccordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Explore our diverse selection of high-end vehicles,
                        choose your preferred pickup and return dates, and
                        select a location that best fits your needs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- FAQ Item End --> */}

                {/* <!-- FAQ Item Start --> */}
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                  <div class="icon-box">
                    <img src="/images/icon-how-it-work-2.svg" alt="" />
                  </div>
                  <h2 class="accordion-header" id="workheading2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#workcollapse2"
                      aria-expanded="false"
                      aria-controls="workcollapse2"
                    >
                      book and confirm
                    </button>
                  </h2>
                  <div
                    id="workcollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="workheading2"
                    data-bs-parent="#workaccordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Explore our diverse selection of high-end vehicles,
                        choose your preferred pickup and return dates, and
                        select a location that best fits your needs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- FAQ Item End --> */}

                {/* <!-- FAQ Item Start --> */}
                <div class="accordion-item wow fadeInUp" data-wow-delay="1s">
                  <div class="icon-box">
                    <img src="/images/icon-how-it-work-3.svg" alt="" />
                  </div>
                  <h2 class="accordion-header" id="workheading3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#workcollapse3"
                      aria-expanded="false"
                      aria-controls="workcollapse3"
                    >
                      book and enjoy
                    </button>
                  </h2>
                  <div
                    id="workcollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="workheading3"
                    data-bs-parent="#workaccordion"
                  >
                    <div class="accordion-body">
                      <p>
                        Explore our diverse selection of high-end vehicles,
                        choose your preferred pickup and return dates, and
                        select a location that best fits your needs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- FAQ Item End --> */}
              </div>
              {/* <!-- How Work Accordion End --> */}
            </div>
            {/* <!-- How Work Content End --> */}
          </div>

          <div class="col-lg-6">
            {/* <!-- How Work Image Start --> */}
            <div class="how-work-image">
              {/* <!-- How Work Image Start --> */}
              <div class="how-work-img">
                {/* <figure class="reveal"> */}
                <img src="/images/about-img-1.jpg" alt="" />
                {/* </figure> */}
              </div>
              {/* <!-- How Work Image End --> */}

              {/* <!-- Trusted Client Start --> */}
              <div class="trusted-client">
                <div class="trusted-client-content">
                  <h3>
                    <span class="counter">5</span>m+ Trusted world wide global
                    clients
                  </h3>
                </div>
                <div class="trusted-client--image">
                  <img src="/images/trusted-client-img.png" alt="" />
                </div>
              </div>
              {/* <!-- Trusted Client End --> */}
            </div>
            {/* <!-- How It Work Image End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
