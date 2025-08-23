import React from "react";

export default function Header() {
  return (
    <header class="main-header">
      <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            {/* <!-- Logo Start --> */}
            <a class="navbar-brand" href="index.html">
              {/* <img src="/src/images/logo.svg" alt="Logo" /> */}
              <h1>Flash Cab</h1>
            </a>
            {/* <!-- Logo End --> */}

            {/* <!-- Main Menu Start --> */}
            <div class="collapse navbar-collapse main-menu">
              <div class="nav-menu-wrapper">
                <ul class="navbar-nav mr-auto" id="menu">
                  <li class="nav-item">
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
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Car Details
                    </a>
                    {/* <ul>
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
                    </ul> */}
                  </li>
                  {/* <li class="nav-item submenu">
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
                  </li> */}
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
                  book a cab
                </a>
              </div>
              {/* <!-- Let’s Start Button End -> */}
            </div>
            {/* <!-- Main Menu End --> */}
            <div class="navbar-toggle"></div>
          </div>
        </nav>
        <div class="responsive-menu"></div>
      </div>
    </header>
  );
}
