import React from "react";
import About from "../pages/about";
import Services from "../pages/services";
import Footer from "./footer";
import HeroSection from "./heroSection";

export const HeaderOld = () => {
  return (
    <>
      {/* <!-- Preloader Start --> */}
      {/* <div class="preloader">
		<div class="loading-container">
			<div class="loading"></div>
			<div id="loading-icon"><img src="/images/loader.svg" alt="" /></div>
		</div>
	</div> */}
      {/* <!-- Preloader End --> */}

      {/* <!-- Header Start --> */}
      <header class="main-header">
        <div class="header-sticky">
          <nav class="navbar navbar-expand-lg">
            <div class="container">
              {/* <!-- Logo Start --> */}
              <a class="navbar-brand" href="index.html">
                {/* <img src="/images/logo.svg" alt="Logo" /> */}
                <h1>Quick Hop</h1>
              </a>
              {/* <!-- Logo End --> */}

              {/* <!-- Main Menu Start --> */}
              <div class="collapse navbar-collapse main-menu">
                <div class="nav-menu-wrapper">
                  <ul class="navbar-nav mr-auto" id="menu">
                    <li class="nav-item submenu">
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="service.html">
                        Services
                      </a>
                    </li>
                    <li class="nav-item submenu">
                      <a class="nav-link" href="#">
                        Cars
                      </a>
                      <ul>
                        <li class="nav-item">
                          <a class="nav-link" href="cars.html">
                            Car Lists
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="car-single.html">
                            Car Details
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="car-type.html">
                            Cars Type
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item submenu">
                      <a class="nav-link" href="#">
                        Pages
                      </a>
                      <ul>
                        <li class="nav-item">
                          <a class="nav-link" href="service-single.html">
                            Service Details
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="blog-single.html">
                            Blog Details
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="drivers.html">
                            Drivers
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="driver-single.html">
                            Driver Details
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="pricing.html">
                            Pricing
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="image-gallery.html">
                            Image Gallery
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="video-gallery.html">
                            Video Gallery
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="testimonials.html">
                            Testimonials
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="faqs.html">
                            FAQ's
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Let’s Start Button Start --> */}
                <div class="header-btn d-inline-flex">
                  <a href="#" class="btn-default">
                    book a rental
                  </a>
                </div>
                {/* <!-- Let’s Start Button End --> */}
              </div>
              {/* <!-- Main Menu End --> */}
              <div class="navbar-toggle"></div>
            </div>
          </nav>
          <div class="responsive-menu"></div>
        </div>
      </header>
      {/* <!-- Header End --> */}

      {/* <!-- Hero Section Start --> */}
      <HeroSection />
      {/* <!-- Hero Section End --> */}

      {/* <!-- About Us Section Start --> */}
      <About />
      {/* <!-- About Us Section End --> */}

      {/* <!-- Our Services Section Start --> */}
      <Services />
      {/* <!-- Our Services Section End --> */}

      {/* <!-- Luxury Collection Section Start --> */}
      <div class="luxury-collection">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-lg-12">
              <div class="luxury-collection-box">
                {/* <!-- Luxury Collection Item Start --> */}
                <div class="luxury-collection-item wow fadeInUp">
                  {/* <!-- Luxury Collection Image Start --> */}
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="/images/luxury-collection-img-1.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Image End --> */}

                  {/* <!-- Luxury Collection Title Start --> */}
                  <div class="luxury-collection-title">
                    <h2>sport car</h2>
                  </div>
                  {/* <!-- Luxury Collection Title End --> */}

                  {/* <!-- Luxury Collection Btn Start --> */}
                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="/images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Btn End --> */}
                </div>
                {/* <!-- Luxury Collection Item End --> */}

                {/* <!-- Luxury Collection Item Start --> */}
                <div
                  class="luxury-collection-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  {/* <!-- Luxury Collection Image Start --> */}
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="/images/luxury-collection-img-2.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Image End --> */}

                  {/* <!-- Luxury Collection Title Start --> */}
                  <div class="luxury-collection-title">
                    <h2>convertible car</h2>
                  </div>
                  {/* <!-- Luxury Collection Title End --> */}

                  {/* <!-- Luxury Collection Footer Start --> */}
                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="/images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Footer End --> */}
                </div>
                {/* <!-- Luxury Collection Item End --> */}

                {/* <!-- Luxury Collection Item Start --> */}
                <div
                  class="luxury-collection-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  {/* <!-- Luxury Collection Image Start --> */}
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="/images/luxury-collection-img-3.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Image End --> */}

                  {/* <!-- Luxury Collection Title Start --> */}
                  <div class="luxury-collection-title">
                    <h2>sedan car</h2>
                  </div>
                  {/* <!-- Luxury Collection Title End --> */}

                  {/* <!-- Luxury Collection Footer Start --> */}
                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="/images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Footer End --> */}
                </div>
                {/* <!-- Luxury Collection Item End --> */}

                {/* <!-- Luxury Collection Item Start --> */}
                <div
                  class="luxury-collection-item wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  {/* <!-- Luxury Collection Image Start --> */}
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="/images/luxury-collection-img-4.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Image End --> */}

                  {/* <!-- Luxury Collection Title Start --> */}
                  <div class="luxury-collection-title">
                    <h2>luxury car</h2>
                  </div>
                  {/* <!-- Luxury Collection Title End --> */}

                  {/* <!-- Luxury Collection Footer Start --> */}
                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="/images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- Luxury Collection Footer End --> */}
                </div>
                {/* <!-- Luxury Collection Item End --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Luxury Collection Section End --> */}

      {/* <!-- How It Work Section Start --> */}
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
                  <div
                    class="accordion-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
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
                  <div
                    class="accordion-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
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
      {/* <!-- How It Work Section End --> */}

      {/* <!-- Intro Video Section Start --> */}
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
                          <img src="/images/client-logo-1.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-2.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-3.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-4.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-5.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-6.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-5.svg" alt="" />
                        </div>
                      </div>
                      {/* <!-- company Logo End --> */}

                      {/* <!-- company Logo Start --> */}
                      <div class="swiper-slide">
                        <div class="company-logo">
                          <img src="/images/client-logo-4.svg" alt="" />
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
      {/* <!-- Intro Video Section End --> */}

      {/* <!-- Why Choose Us Section Start --> */}
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
                  <img src="/images/icon-why-choose-1.svg" alt="" />
                </div>
                <div class="why-choose-content">
                  <h3>extensive fleet options</h3>
                  <p>
                    Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod
                    Eu. Phasellus Hendrerit, Massa
                  </p>
                </div>
              </div>
              {/* <!-- Why Choose Item End --> */}

              {/* <!-- Why Choose Item Start --> */}
              <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                <div class="icon-box">
                  <img src="/images/icon-why-choose-2.svg" alt="" />
                </div>
                <div class="why-choose-content">
                  <h3>exceptional customer service</h3>
                  <p>
                    Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod
                    Eu. Phasellus Hendrerit, Massa
                  </p>
                </div>
              </div>
              {/* <!-- Why Choose Item End --> */}
            </div>

            <div class="col-lg-4 col-md-12 order-lg-2 order-md-3 order-2">
              <div class="why-choose-image">
                {/* <figure class="reveal"> */}
                <img src="/images/why-choose-img.jpg" alt="" />
                {/* </figure> */}
              </div>
            </div>

            <div class="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3">
              {/* <!-- Why Choose Item Start --> */}
              <div class="why-choose-item wow fadeInUp">
                <div class="icon-box">
                  <img src="/images/icon-why-choose-3.svg" alt="" />
                </div>
                <div class="why-choose-content">
                  <h3>convenient locations</h3>
                  <p>
                    Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod
                    Eu. Phasellus Hendrerit, Massa
                  </p>
                </div>
              </div>
              {/* <!-- Why Choose Item End --> */}

              {/* <!-- Why Choose Item Start --> */}
              <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                <div class="icon-box">
                  <img src="/images/icon-why-choose-4.svg" alt="" />
                </div>
                <div class="why-choose-content">
                  <h3>reliability and safety</h3>
                  <p>
                    Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod
                    Eu. Phasellus Hendrerit, Massa
                  </p>
                </div>
              </div>
              {/* <!-- Why Choose Item End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Why Choose Us Section End --> */}

      {/* <!-- Our FAQs Section Start --> */}
      <div class="our-faqs bg-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-1 order-md-2 order-2">
              {/* <!-- Our Faqs Image Start --> */}
              <div class="our-faqs-image">
                <div class="faqs-img-1">
                  <figure class="image-anime">
                    <img src="/images/our-faqs-img-1.jpg" alt="" />
                  </figure>
                </div>

                <div class="faqs-img-2">
                  <figure class="image-anime">
                    <img src="/images/our-faqs-img-2.jpg" alt="" />
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
                  <div
                    class="accordion-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
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
                  <div
                    class="accordion-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
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
                  <div
                    class="accordion-item wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
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
      {/* <!-- Our FAQs Section End --> */}

      {/* <!-- CTA Box Section Start --> */}
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
                    Our friendly customer service team is here to help. Contact
                    us anytime for support and inquiries.
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
      {/* <!-- CTA Box Section End --> */}

      {/* <!-- Our Latest Article Start --> */}
      <div class="latest-article">
        <div class="container">
          <div class="row section-row">
            <div class="col-lg-12">
              {/* <!-- Section Title Start --> */}
              <div class="section-title">
                <h3 class="wow fadeInUp">latest articles</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Stay informed and inspired for your next journey
                </h2>
              </div>
              {/* <!-- Section Title End --> */}
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              {/* <!-- Highlighted Article Post Start --> */}
              <div class="highlighted-article-post wow fadeInUp">
                {/* <!-- Highlighted Article Featured Image Start --> */}
                <div class="highlighted-article-featured-img">
                  <figure>
                    <a href="#" class="image-anime" data-cursor-text="View">
                      <img src="/images/post-1.jpg" alt="" />
                    </a>
                  </figure>
                </div>
                {/* <!-- Highlighted Article Featured Image End --> */}

                {/* <!-- Highlighted Article Body Start --> */}
                <div class="highlighted-article-body">
                  {/* <!-- Article Meta Start --> */}
                  <div class="article-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-calendar-days"></i> sep 19, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Article Meta End --> */}

                  {/* <!-- Highlighted Article Content Start --> */}
                  <div class="highlighted-article-content">
                    <h3>
                      <a href="#">
                        Road Trip Essentials: What to Pack for a Smooth Journey
                      </a>
                    </h3>
                    <a href="#" class="section-icon-btn">
                      <img src="/images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- Highlighted Article Content End --> */}
                </div>
                {/* <!-- Highlighted Article Body End --> */}
              </div>
              {/* <!-- Highlighted Article Post End --> */}
            </div>
            <div class="col-lg-6">
              {/* <!-- Article Post Start --> */}
              <div class="article-post wow fadeInUp">
                <div class="article-featured-img">
                  <figure>
                    <a href="#" class="image-anime" data-cursor-text="View">
                      <img src="/images/post-2.jpg" alt="" />
                    </a>
                  </figure>
                </div>

                <div class="article-post-body">
                  {/* <!-- Article Meta Start --> */}
                  <div class="article-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-calendar-days"></i> sep 20, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Article Meta End --> */}

                  <div class="article-post-content">
                    <h3>
                      <a href="#">
                        Exploring the City: Best Urban Destinations for a
                        Weekend Getaway
                      </a>
                    </h3>
                    <a href="#" class="read-story-btn">
                      read story
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Article Post End --> */}

              {/* <!-- Article Post Start --> */}
              <div class="article-post wow fadeInUp" data-wow-delay="0.25s">
                <div class="article-featured-img">
                  <figure>
                    <a href="#" class="image-anime" data-cursor-text="View">
                      <img src="/images/post-3.jpg" alt="" />
                    </a>
                  </figure>
                </div>

                <div class="article-post-body">
                  {/* <!-- Article Meta Start --> */}
                  <div class="article-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-calendar-days"></i> sep 21, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Article Meta End --> */}

                  <div class="article-post-content">
                    <h3>
                      <a href="#">
                        Exploring the City: Best Urban Destinations for a
                        Weekend Getaway
                      </a>
                    </h3>
                    <a href="#" class="read-story-btn">
                      read story
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Article Post End --> */}

              {/* <!-- Article Post Start --> */}
              <div class="article-post wow fadeInUp" data-wow-delay="0.5s">
                <div class="article-featured-img">
                  <figure>
                    <a href="#" class="image-anime" data-cursor-text="View">
                      <img src="/images/post-4.jpg" alt="" />
                    </a>
                  </figure>
                </div>

                <div class="article-post-body">
                  {/* <!-- Article Meta Start --> */}
                  <div class="article-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-calendar-days"></i> sep 22, 2024
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Article Meta End --> */}

                  <div class="article-post-content">
                    <h3>
                      <a href="#">
                        Exploring the City: Best Urban Destinations for a
                        Weekend Getaway
                      </a>
                    </h3>
                    <a href="#" class="read-story-btn">
                      read story
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Article Post End --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Latest Article End --> */}

      {/* <!-- Footer Start --> */}
      <Footer />
    </>
  );
};
