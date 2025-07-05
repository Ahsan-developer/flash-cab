import React from "react";

export default function Faqs() {
  return (
    <div class="our-faqs bg-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1 order-md-2 order-2">
            {/* <!-- Our Faqs Image Start --> */}
            <div class="our-faqs-image">
              <div class="faqs-img-1">
                <figure class="image-anime">
                  <img src="/src/images/our-faqs-img-1.jpg" alt="" />
                </figure>
              </div>

              <div class="faqs-img-2">
                <figure class="image-anime">
                  <img src="/src/images/our-faqs-img-2.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* <!-- Our Faqs Image End --> */}
          </div>

          <div class="col-lg-6 order-lg-2 order-md-1 order-1">
            {/* <!-- Our Faqs Content Start --> */}
            <div class="our-faqs-content">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h3 class="wow fadeInUp">frequently asked questions</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Everything you need to know about our services
                </h2>
              </div>
              {/* <!-- Section Title End --> */}

              {/* <!-- Our Faqs Accordion Start --> */}
              <div class="our-faqs-accordion" id="faqsaccordion">
                {/* <!-- FAQ Item Start --> */}
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                  <h2 class="accordion-header" id="faqheading1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapse1"
                      aria-expanded="true"
                      aria-controls="faqcollapse1"
                    >
                      What do I need to rent a car?
                    </button>
                  </h2>
                  <div
                    id="faqcollapse1"
                    class="accordion-collapse collapse show"
                    aria-labelledby="faqheading1"
                    data-bs-parent="#faqsaccordion"
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
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                  <h2 class="accordion-header" id="faqheading2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapse2"
                      aria-expanded="false"
                      aria-controls="faqcollapse2"
                    >
                      How old do I need to be to rent a car?
                    </button>
                  </h2>
                  <div
                    id="faqcollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqheading2"
                    data-bs-parent="#faqsaccordion"
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
                  <h2 class="accordion-header" id="faqheading3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapse3"
                      aria-expanded="false"
                      aria-controls="faqcollapse3"
                    >
                      Can I rent a car with a debit card?
                    </button>
                  </h2>
                  <div
                    id="faqcollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqheading3"
                    data-bs-parent="#faqsaccordion"
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
              {/* <!-- Our Faqs Accordion End --> */}
            </div>
            {/* <!-- Our Faqs Content End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
